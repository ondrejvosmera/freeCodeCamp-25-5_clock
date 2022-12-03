import React from 'react'
import './App.css'
import { FiArrowUpCircle } from 'react-icons/fi'
import { FiArrowDownCircle } from 'react-icons/fi'
import { BiPauseCircle } from 'react-icons/bi'
import { BiPlayCircle } from 'react-icons/bi'
import { VscDebugRestart } from 'react-icons/vsc'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.loop = undefined;
  }

  state = {
    breakCount: 5,
    sessionCount: 25,
    clock: 25 * 60,
    currentTimer: 'Session',
    loop: undefined,
    isPlaying: false
  }

  handlePlayPause = () => {
    const { isPlaying } = this.state;

    if(isPlaying) {
      clearInterval(this.loop);

      this.setState ({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });

      this.loop = setInterval(() => {
        const { clock, currentTimer, breakCount, sessionCount } = this.state;

        if(clock === 0) {
          this.setState ({
            currentTimer: (currentTimer === 'Session') ? 'Break' : 'Session',
            clock: (currentTimer === 'Session') ? (breakCount * 60) : (sessionCount * 60)
          });
        } else {
          this.setState ({
            clock: clock - 1
          });
        }

      }, 1000);
    }
  }

  handleBreakIncrease = () => {
    const { breakCount } = this.state;

    if(breakCount < 60) {
      this.setState ({
          breakCount: breakCount + 1
      });
    }
  }

  handleBreakDecrease = () => {
    const { breakCount } = this.state;

    if(breakCount > 1) {
      this.setState ({
          breakCount: breakCount - 1
      });
    }
  }

  handleSessionIncrease = () => {
    const { sessionCount, clock } = this.state;

    if(sessionCount < 60) {
      this.setState ({
          sessionCount: sessionCount + 1,
          clock: clock + 60
      });
    }
  }

  handleSessionDecrease = () => {
    const { sessionCount, clock } = this.state;

    if(sessionCount > 1) {
      this.setState ({
          sessionCount: sessionCount - 1,
          clock: clock - 60
      });
    }
  }

  handleRestart = () => {
    const { isPlaying, sessionCount } = this.state;

    if(isPlaying) {
      clearInterval(this.loop);

      this.setState ({
        isPlaying: false
      });
    }

    this.setState ({
      clock: sessionCount * 60
    });
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  time_convert(num) { 
    const minutes = Math.floor(num / 60);  
    let seconds = num % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;         
  }

  render () {

    const { 
      breakCount, 
      sessionCount, 
      clock, 
      currentTimer,
      isPlaying
     } = this.state;

    return (
      <div className='container'>
        <h1 className='title'>Pomodoro clock</h1>

        <div className='break_session'>

          <div className='break'>
            <div className='break-title'>Break length</div>
            <div className='break-control'>
              <button className={`arrow ${isPlaying ? 'not-clickable' : 'clickable'}`} onClick={this.handleBreakIncrease}><FiArrowUpCircle /></button>
              <div className='break-number'>{breakCount}</div>
              <button className={`arrow ${isPlaying ? 'not-clickable' : 'clickable'}`} onClick={this.handleBreakDecrease}><FiArrowDownCircle /></button>
            </div>
          </div>
        
          <div className='session'>
            <div className='session-title'>Session length</div>
            <div className='session-control'>
              <button className={`arrow ${isPlaying ? 'not-clickable' : 'clickable'}`} onClick={this.handleSessionIncrease}><FiArrowUpCircle /></button>
              <div className='session-number'>{sessionCount}</div>
              <button className={`arrow ${isPlaying ? 'not-clickable' : 'clickable'}`} onClick={this.handleSessionDecrease}><FiArrowDownCircle /></button>
            </div>
          </div>
        </div>

          <div className='clock'>
            <div className='clock-title'>{currentTimer}</div>
            <div className='timer'>{this.time_convert(clock)}</div>

            <div className='control'>
              <button className={`btn-control ${isPlaying ? 'hide' : 'show'}`} onClick={this.handlePlayPause}><BiPlayCircle /></button>
              <button className={`btn-control ${isPlaying ? 'show' : 'hide'}`} onClick={this.handlePlayPause}><BiPauseCircle /></button>
              <button className='btn-control'  onClick={this.handleRestart}><VscDebugRestart /></button>
            </div>
          </div>
          
      </div>
    )
  }
}

export default App