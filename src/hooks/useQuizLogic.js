import { useEffect } from 'react'
import useQuizStore from '../store/quizStore'
import quizQuestions from '../data/quizQuestions'

const useQuizLogic = () => {
  const {
    questions,
    setQuestions,
    currentQuestionIndex,
    answers,
    isCompleted,
    isStarted,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    completeQuiz,
    resetQuiz,
  } = useQuizStore()

  // Initialize questions from data
  useEffect(() => {
    setQuestions(quizQuestions)
  }, [setQuestions])

  const currentQuestion = questions[currentQuestionIndex] || null

  const canSubmit = Object.keys(answers).length === questions.length

  const handleAnswer = (questionId, answer) => {
    answerQuestion(questionId, answer)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion()
    }
  }

  const handlePreviousQuestion = () => {
    previousQuestion()
  }

  const handleSubmitQuiz = () => {
    completeQuiz()
  }

  const handleResetQuiz = () => {
    resetQuiz()
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    selectedAnswer: currentQuestion ? answers[currentQuestion.id] : null,
    canSubmit,
    isCompleted,
    isStarted,
    handleAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    handleSubmitQuiz,
    handleResetQuiz,
    startQuiz,
  }
}

export default useQuizLogic
