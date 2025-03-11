import { create } from 'zustand'

const useQuizStore = create((set, get) => ({
  // Quiz state
  questions: [],
  currentQuestionIndex: 0,
  answers: {},
  isCompleted: false,
  isStarted: false,

  // Chat state
  chatMessages: [
    {
      id: 'welcome',
      type: 'system',
      content: 'Welcome to the Quiz! Click "Start Quiz" to begin.',
    },
  ],

  // Results state
  results: {
    correct: 0,
    incorrect: 0,
    percentage: 0,
  },

  // Actions
  setQuestions: (questions) => set({ questions }),

  startQuiz: () => {
    const welcomeMessage = {
      id: `system-${Date.now()}`,
      type: 'system',
      content: 'Quiz started. Answer all questions to complete the quiz.',
    }

    set((state) => ({
      isStarted: true,
      chatMessages: [...state.chatMessages, welcomeMessage],
    }))
  },

  answerQuestion: (questionId, answer) => {
    set((state) => {
      // Update answers
      const newAnswers = { ...state.answers, [questionId]: answer }

      // Add message to chat
      const question = state.questions.find((q) => q.id === questionId)
      const answerMessage = {
        id: `answer-${Date.now()}`,
        type: 'user',
        content: `Question: ${question.text}\nYour answer: ${answer}`,
      }

      return {
        answers: newAnswers,
        chatMessages: [...state.chatMessages, answerMessage],
      }
    })
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: state.currentQuestionIndex + 1,
    }))
  },

  previousQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1),
    }))
  },

  calculateResults: () => {
    const { questions, answers } = get()

    let correct = 0
    let incorrect = 0

    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correct++
      } else {
        incorrect++
      }
    })

    const percentage = (correct / questions.length) * 100

    set({
      results: {
        correct,
        incorrect,
        percentage,
      },
    })

    return { correct, incorrect, percentage }
  },

  completeQuiz: () => {
    const results = get().calculateResults()

    const resultMessage = {
      id: `results-${Date.now()}`,
      type: 'system',
      content: 'Quiz completed! Here are your results:',
      hasChart: true,
      results,
    }

    const feedbackMessage = {
      id: `feedback-${Date.now()}`,
      type: 'system',
      content: getFeedbackMessage(results.percentage),
    }

    set((state) => ({
      isCompleted: true,
      chatMessages: [...state.chatMessages, resultMessage, feedbackMessage],
    }))
  },

  resetQuiz: () => {
    set({
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
      isStarted: false,
      results: {
        correct: 0,
        incorrect: 0,
        percentage: 0,
      },
      chatMessages: [
        {
          id: 'welcome',
          type: 'system',
          content: 'Welcome to the Quiz! Click "Start Quiz" to begin.',
        },
      ],
    })
  },
}))

// Helper function to generate feedback based on performance
function getFeedbackMessage(percentage) {
  if (percentage >= 90) {
    return 'Feedback Message : Excellent work! You have mastered this topic!'
  } else if (percentage >= 70) {
    return 'Feedback Message : Good job! You have a solid understanding of this topic.'
  } else if (percentage >= 50) {
    return "Feedback Message : Not bad, but there's room for improvement. Consider reviewing the material again."
  } else {
    return "Feedback Message : You might need to spend more time studying this topic. Don't give up!"
  }
}

export default useQuizStore
