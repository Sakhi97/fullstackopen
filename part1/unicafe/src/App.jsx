import { useState } from 'react'

const Statistics = (props) => {  
  return (
    <div>
        <Statistic text='good' value={props.good} />
        <Statistic text='neutral' value={props.neutral} />
        <Statistic text='bad' value={props.bad} />
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
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