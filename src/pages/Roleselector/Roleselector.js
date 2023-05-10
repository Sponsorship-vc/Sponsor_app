// import React from 'react'
// import Card from '../../components/Roleselector/Card'
// import grp1 from '../../Assets/Roleselector/Group1.png'
// import grp2 from '../../Assets/Roleselector/Group2.png'
// import logo from '../../Assets/Landing/logo.png'
// const roleselector = () => {
//   return (
//     <div className=' grid grid-rows-8 bg-sky-200 w-full  h-full'>

//         <div className='lg:row-span-3 grid lg:grid-cols-9 lg:p-8 p-8 grid-cols-1 bg-sky-200 lg:flex-row flex-col'>

//             <div className=' lg:row-span-3 lg:col-start-3 lg:col-end-5 p-1'>
//                 <Card
//                  img={grp2}
//                  title="Innovator" 
//                  button="Continue as Innovator" />
//             </div>

//             <div className='lg:row-span-3 lg:col-start-6 lg:col-end-8 p-1'>
//                 <Card
//                  img={grp1} 
//                  title="Sponsor"
//                  button="Continue as Sponsor" /> 
//             </div>
                    
//         </div>
      
       
//     </div>
//   )
// }

// export default roleselector

import React from 'react'
import Card from '../../components/Roleselector/Card'
import grp1 from '../../Assets/Roleselector/Group1.png'
import grp2 from '../../Assets/Roleselector/Group2.png'
import logo from '../../Assets/Landing/logo.png'
import Sidebar from '../../components/Roleselector/Sidebar'
function Roleselector() {
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default Roleselector


