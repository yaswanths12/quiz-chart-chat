import React, { useState } from 'react'
import useQuizStore from '../../store/quizStore'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { chatMessages } = useQuizStore()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add the message to chat
    const newMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: message,
    }

    // In a real app, you would process this message and generate a response
    const responseMessage = {
      id: `system-${Date.now() + 1}`,
      type: 'system',
      content:
        'Thank you for your message! This is a demo of the quiz chat interface.',
    }

    // Update the chat store with both messages
    useQuizStore.setState({
      chatMessages: [...chatMessages, newMessage, responseMessage],
    })

    // Clear the input
    setMessage('')
  }

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        placeholder="Ask a question about the quiz..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="chat-send-button"
        disabled={!message.trim()}
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
