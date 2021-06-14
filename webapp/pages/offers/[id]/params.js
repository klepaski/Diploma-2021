import React, { useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { MainContext } from '../../../components/contextProviders/MainContext'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import { Wrapper, WrapperHeight } from '../../../components/StyledComponents/Wrapper'
import GreatProgress from '../../../components/Offer/params/GreatProggress'
import { Button } from '../../../components/controls/Button/Button'
import { Footer } from '../../../components/Layouts/styledLayouts'
import { Divider } from '../../../components/StyledComponents/Divider'
import { apiCreateOfferParams, apiGetParamsCategory, apiEditOffer } from '../../../actions/api'
import { showNotification } from '../../../utils/notification'
import Header from '../../../components/Header/Header'
import useOffer from '../../../hooks/useOffer'
import { ContainerDesktop, FooterDesktop } from '../../../components/StyledComponents/Grid'

const Params = ({}) => {
  const router = useRouter()
  const { id } = router.query
  const offer = useOffer(id)
  const { setOffer } = useContext(MainContext)
  const [step, setStep] = useState(1)
  const [params, setParams] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loading, setLoading] = useState(false)

  console.log('offer', offer)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  useEffect(() => {
    if (offer.id) {
      let catId = (offer.subCategory ? offer.subCategory.id : null) || offer.category.id
      apiGetParamsCategory(catId)
        .then((res) => {
          let params = res.data.templates,
            parentParams = []
          if (res.data.parentCategory && res.data.parentCategory.templates) {
            parentParams = res.data.parentCategory.templates
          }

          let paramsConcat = parentParams.concat(params)
          let paramsArr = paramsConcat.map((item, key) => {
            return item.templateId
          })

          function removeDuplicates(myArr, prop) {
            return myArr.filter((obj, pos, arr) => {
              return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos
            })
          }
          const unique = removeDuplicates(paramsArr, 'id')

          unique.map((item, key) => {
            item.value = getCategoryValue(item.id) || item.defaultValue
            if (!item.value && item.type === 'int') item.value = 1
          })
          setParams(unique)
          setIsLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          setIsLoading(false)
          showNotification('error', err)
        })
    }
  }, [offer.id])

  const getCategoryValue = (id) => {
    let categoryOptions = offer.categoryOptions || []
    let index = categoryOptions.findIndex((item) => {
      let templateId = item.templateId ? item.templateId.id : null
      return templateId === id
    })
    if (index !== -1) {
      return categoryOptions[index].value
    }
    return null
  }

  const handleChangeStep = (i) => {
    if (step === 1 && i === 1) {
      createParams()
    } else {
      setStep(step + i)
    }
  }

  const onChange = (obj) => {
    let clone = [...params]
    let index = clone.findIndex((item) => item.id === obj.id)
    if (index !== -1) {
      clone[index] = obj
      setParams(clone)
    }
  }

  const createParams = () => {
    const clone = [...params]
    let arr = []
    clone.map((item, key) => {
      arr.push({
        templateId: item.id,
        value: item.value,
      })
    })
    setLoading(true)
    apiEditOffer(id, { step: 1 })
    apiCreateOfferParams(id, arr)
      .then((res) => {
        setLoading(false)
        setOffer({ ...offer, categoryOptions: res.data.categoryOptions })
        Router.push('/offers/[id]/photos', `/offers/${id}/photos`, { shallow: true })
      })
      .catch((err) => {
        setLoading(false)
        showNotification('error', err)
      })
  }

  const disabled = loading

  return (
    <>
      <Header isReg />
      <ContainerDesktop isOffer>
        <Wrapper p={17} pt={35}>
          {!isLoading ? (
            <>
              <WrapperHeight>
                {step === 1 && (
                  <GreatProgress
                    offer={offer}
                    handleChangeStep={handleChangeStep}
                    loading={loading}
                  />
                )}
              </WrapperHeight>

              {step !== 1 && (
                <FooterDesktop>
                  <Footer mt={30} flexEnd={step === 1}>
                    {step !== 1 && <Button onClick={() => handleChangeStep(-1)}>Back</Button>}
                    <Button blue onClick={() => handleChangeStep(1)} disabled={disabled}>
                      Next
                    </Button>
                  </Footer>
                </FooterDesktop>
              )}
            </>
          ) : (
            <>Loading...</>
          )}
        </Wrapper>
      </ContainerDesktop>
    </>
  )
}

export default Params

