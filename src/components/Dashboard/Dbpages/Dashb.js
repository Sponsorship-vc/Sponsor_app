import React from 'react'
import Card from './Sponsor/Card'

const Dashb = () => {
  return (
     
    <div>
    <div class="grid grid-cols-5  flex-1 h-screen  bg-white   items-center justify-center  p- bg-white   shadow ">
        <div class="col-start-2 flex-row">
        <Card/>
        <Card/>
        <Card/>
        
        </div>
        <div class="col-start-3 flex-row">
        <Card/>
        <Card/>
        <Card/>
        
        </div>
        <div class="col-start-4 flex-row">
        <Card/>
        <Card/>
        <Card/>
        
        </div>

        <div class="col-start-5 flex-row">
        <Card/>
        <Card/>
        <Card/>
        
        </div>
        
    </div>
    </div>
  )
}

export default Dashb