import React from 'react'
import ResultsContainer from '../Results/ResultsContainer'

const ChatBubble = ({ message }) => {
  const { type, content, hasChart, results } = message

  const bubbleClass = `chat-bubble ${type}-bubble`

  return (
    <div className={bubbleClass}>
      <div className="bubble-content">
        <p>{content}</p>

        {hasChart && results && <ResultsContainer results={results} />}
      </div>

      <div className="bubble-timestamp">
        {new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    </div>
  )
}

export default ChatBubble
