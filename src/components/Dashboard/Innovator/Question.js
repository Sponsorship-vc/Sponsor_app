// import { useState } from 'react';
// // import Arrow from '../../../Assets/Dashboard/Arrow.png'
// import Help from '../../../components/Dashboard/Innovator/help/Help.js';

// const Question = () => {

//   const Quest= [
//     {
//       question: "What is the capital of France?",
//       answer: "The capital of France is Paris."
//     },
//     {
//       question: "What is the tallest mountain in the world?",
//       answer: "Mount Everest is the tallest mountain in the world."
//     },
//     {
//       question: "What is the largest ocean?",
//       answer: "The largest ocean is the Pacific Ocean."
//     },
//     {
//       question: "Who painted the Mona Lisa?",
//       answer: "The Mona Lisa was painted by Leonardo da Vinci."
//     }
//   ]
  
 

//   return (
 
//   <div>
//     <h1>
//         Freq
//       </h1>
//       {Quest.map(()=>(
//         <Help
//           question={Quest.question}
//           answer={Quest.answer}
//         />

//       ))}
  
//   {/* Add more Helps as needed */}
// </div>

//   );
// };

// export default Question;


import React from 'react'
import Help from '../../../components/Dashboard/Innovator/help/Help'

const Question = () => {
  const Quest =
    [
      {
        question: "How can I become a sponsor on the platform?",
        answer: "To become a sponsor on our platform, you can sign up and create an account. Once your account is verified, you will have access to sponsor features and opportunities to connect with innovators."
      },
      {
        question: "What benefits do sponsors receive on the platform?",
        answer: "As a sponsor, you gain visibility among a community of innovators, access to cutting-edge projects and ideas, opportunities for collaboration, and the ability to support and nurture promising innovations."
      },
      {
        question: "How can I submit my innovative project on the platform?",
        answer: "To submit your innovative project, simply create an innovator account and navigate to the project submission section. Fill out the required information, including project details, objectives, and any supporting documents. Once submitted, your project will be reviewed by our team."
      },
      {
        question: "Are there any fees associated with using the platform as a sponsor or innovator?",
        answer: "The basic usage of the platform is free for both sponsors and innovators. However, there may be additional premium features or services that come with a fee. These optional services will be clearly communicated and are not required for accessing the core functionalities."
      },
      {
        question: "Can sponsors and innovators directly connect and collaborate on the platform?",
        answer: "Yes, sponsors and innovators can connect and collaborate on the platform. Our platform provides communication tools and features that facilitate direct interaction, such as messaging, project discussions, and collaboration spaces."
      },
      {
        question: "How are projects and innovations evaluated on the platform?",
        answer: "Projects and innovations go through a review process conducted by our team, which assesses factors such as novelty, potential impact, feasibility, and alignment with sponsor interests. The evaluation criteria are designed to ensure quality and match projects with the most suitable sponsors."
      },
      {
        question: "Can I search for specific types of projects or sponsors on the platform?",
        answer: "Yes, our platform offers search functionality to help you find projects or sponsors based on specific criteria such as industry, technology domain, location, or project stage. You can filter and browse through the available options to identify the most relevant matches."
      }
    ]
  

  return (
    <div>
      <h1 className='ml-64 flex text-black text-3xl font-bold justify-center pb-10 mt-[3rem]'>Frequency Asked Questions</h1>
      {Quest.map((item, index) => (
        <Help key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default Question;
