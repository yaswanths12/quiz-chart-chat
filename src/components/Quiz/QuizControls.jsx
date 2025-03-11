import React from 'react'

const QuizControls = ({
  currentQuestionIndex,
  totalQuestions,
  canSubmit,
  onNext,
  onPrevious,
  onSubmit,
}) => {
  const isFirstQuestion = currentQuestionIndex === 0
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  return (
    <div className="quiz-controls">
      <button
        className="control-button previous"
        onClick={onPrevious}
        disabled={isFirstQuestion}
      >
        Previous
      </button>

      {isLastQuestion ? (
        <button
          className="control-button submit"
          onClick={onSubmit}
          disabled={!canSubmit}
        >
          Submit Quiz
        </button>
      ) : (
        <button className="control-button next" onClick={onNext}>
          Next
        </button>
      )}
    </div>
  )
}

export default QuizControls
