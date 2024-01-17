import { useState } from 'react'

const Statistics = (props) => {  
  const sum = props.good + props.neutral + props.bad
    if (sum === 0){
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    } 
  return (
    <table>
    <tbody>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={sum} />
      <StatisticLine text='average' value={((props.good + props.bad * (-1))/sum).toFixed(1)} />
      <StatisticLine text='positive' value={((props.good / sum) * 100).toFixed(1) +' %'} />
    </tbody>
  </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
   </tr>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.onClick} >{props.text}</button>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1> give feeback</h1>
      <Button
        onClick = {handleClickGood}
        text = 'good'
      />
      <Button 
        onClick = {handleClickNeutral}
        text = 'neutral'
      />
      <Button 
        onClick = {handleClickBad}
        text = 'bad'
      />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App