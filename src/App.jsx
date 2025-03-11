import React, { useState, useEffect } from 'react'
import QuizContainer from './components/Quiz/QuizContainer'
import ChatContainer from './components/Chat/ChatContainer'
import useQuizStore from './store/quizStore'
import quizQuestions from './data/quizQuestions'
import './assets/styles/global.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const setQuestions = useQuizStore((state) => state.setQuestions)

  // Initialize quiz questions
  useEffect(() => {
    setQuestions(quizQuestions)
  }, [setQuestions])

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark-mode')
  }

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Quiz & It's Results with Chart Integration</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="app-content">
        <div className="quiz-section">
          <QuizContainer />
        </div>

        <div className="chat-section">
          <ChatContainer />
        </div>
      </main>

      <footer className="app-footer">
        <p>Quiz & It's Results with Chart Integration </p>
      </footer>
    </div>
  )
}

export default App
