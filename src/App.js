import './App.scss';
import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';

const App = () => {
  const [time, setTime] = useState({ sec: 0, min: 0, hours: 0 })
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)

  let updatedSec = time.sec
  let updatedMin = time.min
  let updatedHours = time.hours

  const onStartBtnClick = () => {
    startCounter()
    setStatus(1)
  }

  const startCounter = () => {
    run()
    setInterv(setInterval(run, 1000));
  }

  const run = () => {
    if (updatedMin === 60) {
      updatedHours++
      updatedMin = 0
    }
    if (updatedSec === 60) {
      updatedMin++
      updatedSec = 0
    }
    const time = setTime({ sec: updatedSec, min: updatedMin, hours: updatedHours })
    updatedSec++
    return time
  }

  const onStopBtnClick = () => {
    clearInterval(interv)
    setTime({ sec: 0, min: 0, hours: 0 })
    setStatus(0)
  }

  const onResetBtnClick = () => {
    updatedSec = 0
    updatedMin = 0
    updatedHours = 0
    clearInterval(interv)
    startCounter()

  }

  const onWaitBtnClick = () => {
    clearInterval(interv)
    setStatus(0)
  }
  return (
    <div className="counter-wrapper">
      <h1>React stopWatcher</h1>
      <div className="counter-content-box">
        <Counter time={time} />
        <div className="counter-btn-box">
          {status === 0 && <Button onClick={onStartBtnClick} text="Start" className="btn-outline-success" />}
          {status === 1 && <Button onClick={onStopBtnClick} text="Stop" className="btn-outline-danger" />}
          <Button onClick={onResetBtnClick} text="Reset" className="btn-outline-dark" />
          <Button onClick={onWaitBtnClick} text="Wait" className="btn-outline-dark" />
        </div>
      </div>
    </div>
  );
}

export default App;
