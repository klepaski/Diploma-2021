import React, { useState, useContext, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import { apiGetUserById } from '../../actions/api'
import UserContent from '../../components/Profile/UserContent'
import { ContainerDesktop } from '../../components/StyledComponents/Grid'

export default () => {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      apiGetUserById(id)
        .then((res) => {
          setUser(res.data)
          setLoading(false)
        })
        .catch((e) => {
          setLoading(false)
        })
    }
  }, [id])

  return (
    <>
      <Header isProfile />
      {!loading ? <UserContent user={user} /> : <>Loading...</>}
    </>
  )
}
