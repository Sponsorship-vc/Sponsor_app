import React from 'react'
import Sponsignup from '../../components/Signup/Sponsignup'
import Innsignup from '../../components/Signup/Innsignup'
import { useParams } from 'react-router-dom'

function Signup() {
  const {id} = useParams()
  return (
    <>
    {id === 'innovator' && <Innsignup />}
    {id === 'sponsor' && <Sponsignup/>}
  </>
  )
}

export default Signup