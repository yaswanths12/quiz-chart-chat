import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const BarChartResult = ({ results }) => {
  const data = [
    { name: 'Correct', value: results.correct, fill: '#4CAF50' },
    { name: 'Incorrect', value: results.incorrect, fill: '#F44336' },
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" animationDuration={1000} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartResult
