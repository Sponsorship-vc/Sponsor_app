import React from 'react'
import Header from '../../../components/Dashboard/Header'
import Chat from '../../../components/Dashboard/Chat/Chat'
import ChatSidebar from '../../../components/Dashboard/Chat/ChatSidebar'
import './chat.css'
function ChatWindow() {
  return (
    <div className='bg-[#F3F4FF]'>
      <Header/>
      <Chat/>
      <ChatSidebar/>
    </div>
  )
}

export default ChatWindow
