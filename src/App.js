import React from 'react'
import './App.css'
import { FiArrowUpCircle } from 'react-icons/fi'
import { FiArrowDownCircle } from 'react-icons/fi'
import { BiPauseCircle } from 'react-icons/bi'
import { BiPlayCircle } from 'react-icons/bi'
import { VscDebugRestart } from 'react-icons/vsc'

class App extends React.Component {

  render () {

    return (
      <div className='container'>
        <h1 className='title'>25 + 5 clock</h1>

        <div className='break_session'>

          <div className='break'>
            <div className='break-title'>Break length</div>
            <div className='break-control'>
              <button className='arrow'><FiArrowUpCircle /></button>
              <div className='break-number'>5</div>
              <button className='arrow'><FiArrowDownCircle /></button>
            </div>
          </div>
        
          <div className='session'>
            <div className='session-title'>Session length</div>
            <div className='session-control'>
              <button className='arrow'><FiArrowUpCircle /></button>
              <div className='session-number'>5</div>
              <button className='arrow'><FiArrowDownCircle /></button>
            </div>
          </div>
        </div>

          <div className='clock'>
            <div className='clock-title'>Session</div>
            <div className='timer'>25:00</div>

            <div className='control'>
              <button className='btn-control'><BiPlayCircle /></button>
              <button className='btn-control'><BiPauseCircle /></button>
              <button className='btn-control'><VscDebugRestart /></button>
            </div>
          </div>
          
      </div>
    )
  }
}

export default App