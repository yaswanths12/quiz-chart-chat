import React from 'react'
import Question from './Question'
import QuizControls from './QuizControls'
import useQuizLogic from '../../hooks/useQuizLogic'

const QuizContainer = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    canSubmit,
    isCompleted,
    isStarted,
    handleAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSubmitQuiz,
    startQuiz,
  } = useQuizLogic()

  if (!isStarted) {
    return (
      <div className="quiz-container">
        <h2>React Knowledge Quiz</h2>
        <p>Test your knowledge of React with this 5-question quiz!</p>
        <button className="start-button" onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    )
  }

  if (isCompleted) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <p>Check the chat for your results and feedback.</p>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </h2>
      </div>

      {currentQuestion && (
        <Question
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
        />
      )}

      <QuizControls
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        canSubmit={canSubmit}
        onNext={handleNextQuestion}
        onPrevious={handlePreviousQuestion}
        onSubmit={handleSubmitQuiz}
      />
    </div>
  )
}

export default QuizContainer
