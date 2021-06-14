import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Router } from '../../routes'
import { MainContext } from '../../components/contextProviders/MainContext'
import {
  CheckLabel,
  Footer,
  Label,
  Label2,
  TipWrapper,
  TipWrapper2,
  Title,
  WhoCard,
} from '../../components/Layouts/styledLayouts'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import { Wrapper, WrapperHeight } from '../../components/StyledComponents/Wrapper'
import { Button } from '../../components/controls/Button/Button'
import Header from '../../components/Header/Header'
import { login, withAuthSync } from '../../utils/auth'
import Category from '../../components/Offer/creation/Category'
import {
  apiLoginUser,
  apiCreateOffer,
  apiGetEventTypes,
  apiGetProgrammerCategories,
} from '../../actions/api'
import { showNotification } from '../../utils/notification'
import useUserInfo from '../../hooks/useUserInfo'
import { ContainerDesktop, FooterDesktop } from '../../components/StyledComponents/Grid'

const Create = () => {
  const [step, setStep] = useState(1)
  const [listEventTypes, setListEventTypes] = useState([])
  const [listCategories, setListCategories] = useState([])
  const [loading, setLoading] = useState(false)
  let defaultOffer = {
    name: '',
    summary: '',
    description: '',
    descriptionWillDone: '',
    descriptionWillProvide: '',
    descriptionRequirements: '',
    descriptionNote: '',
    type: [],
    country: [],
    category: {},
    subCategory: {},
    listEmails: [],
  }
  const [offer, setOffer] = useState(defaultOffer)

  useEffect(() => {
    let getListEventTypes = async () => {
      const res = await apiGetEventTypes()
      setListEventTypes(res.data)
    }
    const getCategories = async () => {
      const res = await apiGetProgrammerCategories()
      setListCategories(res.data)
    }
    getCategories()
    getListEventTypes()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  const handleBack = () => {
    setStep(step - 1)
  }
  const handleNext = () => {
    if (step === 1) {
      createOffer()
    } else {
      setStep(step + 1)
    }
  }

  const onChange = (e) => {
    let { name, value, required } = e.target

    if (
      name == 'description' ||
      name == 'descriptionWillDone' ||
      name == 'descriptionWillProvide' ||
      name == 'descriptionRequirements' ||
      name == 'descriptionNote'
    ) {
      value = value.slice(0, 500)
    }

    if (name == 'name') {
      value = value.slice(0, 200)
    }
    if (name == 'summary') {
      value = value.slice(0, 300)
    }


    setOffer((offer) => ({ ...offer, [name]: value }))
    // let error = validate(name, value, required)
    // setErorrs(errors => ({...errors, [name]: error}))
  }

  const createOffer = () => {
    setLoading(true)
    let clone = Object.assign({}, offer)
    clone.category = offer.category.id
    clone.subCategory = offer.subCategory ? offer.subCategory.id : ''
    clone.country = offer.country ? offer.country.map((item) => item.value).join(', ') : ''

    apiCreateOffer(clone)
      .then(async (res) => {
        // let inv = await sendInvitations(res.data.id, offer.listEmails);
        let obj = { emails: offer.listEmails }
        if (offer.listEmails.length) {
          apiSendInvitatons(res.data.id, obj)
            .then(() => {
              Router.push(`/offers/${res.data.id}/params`)
            })
            .catch((err) => {
              showNotification('error', err)
              Router.push(`/offers/${res.data.id}/params`)
            })
        } else {
          Router.push(`/offers/${res.data.id}/params`)
        }
      })
      .catch((err) => {
        setLoading(false)
        showNotification('error', err)
      })
  }

  let disabled = step == 2 && !offer.name

  return (
    <CreateBox>
      <Header isReg hiddeSave />
      <Wrapper p={15} pt={35}>
        <ContainerDesktop isOffer>
          <WrapperHeight>
            {step === 1 && (
              <Category
                offer={offer}
                listCategories={listCategories}
                onChange={onChange}
                handleNext={handleNext}
              />
            )}
          </WrapperHeight>
        </ContainerDesktop>

        {step != 1 && (
        <FooterDesktop>
            <Footer mt={50} flexEnd={step === 1}>
              {step !== 1 && (
                <Button onClick={handleBack} disabled={step === 1 && loading}>
                  Back
                </Button>
              )}
              <Button blue onClick={handleNext} disabled={disabled} loading={loading}>
                Next
              </Button>
            </Footer>
        </FooterDesktop>
        )}
      </Wrapper>
    </CreateBox>
  )
}

export default withAuthSync(Create)

const CreateBox = styled.div`
  @media ${device.laptopDesktop} {
    ${Wrapper} {
      padding-top: 20px;
    }
  }
`
