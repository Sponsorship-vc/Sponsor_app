import React from 'react'
import Header from '../../../components/Dashboard/Header'
import Chat from '../../../components/Dashboard/Chat/Chat'
import ChatSidebar from '../../../components/Dashboard/Chat/ChatSidebar'
function ChatWindow() {
  return (
    <div className=''>
      {/* <Header/> */}
        <div className='bg-[#F3F4FF] flex items-center justify-center h-screen ml-[10rem]'>
            <div className='border border-gray-200 rounded-xl w-[70%] h-[85%] flex overflow-hidden flex-row-reverse bg-white'>
              <Chat/>
              <ChatSidebar/>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow
