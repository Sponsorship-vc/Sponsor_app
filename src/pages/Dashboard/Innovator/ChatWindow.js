import React from 'react'
import Header from '../../../components/Dashboard/Header'
import Chat from '../../../components/Dashboard/Chat/Chat'
import ChatSidebar from '../../../components/Dashboard/Chat/ChatSidebar'

function ChatWindow() {
  return (
    <div>
      <Header/>
      <Chat/>
      <ChatSidebar/>
    </div>
  )
}

export default ChatWindow
