import React, { useRef, useEffect } from 'react'
import ChatBubble from './ChatBubble'
import ChatInput from './ChatInput'
import useQuizStore from '../../store/quizStore'

const ChatContainer = () => {
  const { chatMessages, isCompleted } = useQuizStore()
  const chatEndRef = useRef(null)

  // Auto-scroll to the bottom when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Quiz Chat</h2>
      </div>

      <div className="chat-messages">
        {chatMessages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={chatEndRef} />
      </div>

      {isCompleted && <ChatInput />}
    </div>
  )
}

export default ChatContainer
