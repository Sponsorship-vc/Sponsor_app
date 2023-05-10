import React from 'react'
import Sponlogin from '../../components/Login/Sponlogin'
import Innlogin from '../../components/Login/Innlogin'
import { useParams } from 'react-router-dom'


function Login() {
  const {id} = useParams()
  return (
    <>
    {id === 'innovator' && <Innlogin />}
    {id === 'sponsor' && <Sponlogin />}
  </>
  )
}

export default Login