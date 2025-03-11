import React from 'react'

const Question = ({ question, selectedAnswer, onSelectAnswer }) => {
  if (!question) return null

  return (
    <div className="question-container">
      <h3 className="question-text">{question.text}</h3>
      <div className="options-container">
        {question.options.map((option) => (
          <div
            key={option.id}
            className={`option ${
              selectedAnswer === option.id ? 'selected' : ''
            }`}
            onClick={() => onSelectAnswer(option.id)}
          >
            <input
              type="radio"
              id={`option-${option.id}`}
              name={`question-${question.id}`}
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => onSelectAnswer(option.id)}
            />
            <label htmlFor={`option-${option.id}`}>{option.text}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
