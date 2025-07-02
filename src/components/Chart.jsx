import React from 'react'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, YAxis, XAxis, Tooltip } from 'recharts'

const Chart = ({ data, dataKey, domain }) => {
  return (
    <ResponsiveContainer height="90%" width="100%">
      <LineChart data={data}>
        <XAxis
          dataKey="time"
          tickFormatter={(time) => new Date(time).toLocaleTimeString()}
        />
        <YAxis type='number' domain={domain}/>
        <Tooltip />
        <Legend/>
        <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey={dataKey} type='monotone' stroke='#8884d8' />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
