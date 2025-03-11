import React from 'react'
import BarChartResult from './BarChartResult'
import PieChartResult from './PieChartResult'

const ResultsContainer = ({ results }) => {
  return (
    <div className="results-container">
      <div className="results-summary">
        <div className="result-item">
          <span className="result-label">Correct:</span>
          <span className="result-value correct">{results.correct}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Incorrect:</span>
          <span className="result-value incorrect">{results.incorrect}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Score:</span>
          <span className="result-value">{results.percentage.toFixed(1)}%</span>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-wrapper">
          <h4>Results Breakdown</h4>
          <BarChartResult results={results} />
        </div>
        <div className="chart-wrapper">
          <h4>Performance</h4>
          <PieChartResult results={results} />
        </div>
      </div>
    </div>
  )
}

export default ResultsContainer
