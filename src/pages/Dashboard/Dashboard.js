import React from 'react'
import Spondash from '../../components/Dashboard/Spondash'
import Inndash from '../../components/Dashboard/Inndash'
import { useParams } from 'react-router-dom'

function Dashboard() {
  const {id} = useParams()
  return (
    <>
    {id === 'innovator' && <Inndash/>}
    {id === 'sponsor' && <Spondash/>}
  </>
  )
}

export default Dashboard