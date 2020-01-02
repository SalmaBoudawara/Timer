import React from 'react'
import './Timer.css'
class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isOn:false,
            timer:0,
           second:0,
           minute:0,
           hour:0
        }
        setInterval(() => {
            if(this.state.isOn){
              this.setState({
                              
                timer: this.state.timer + 1,
                hour:  Math.floor  (  this.state.timer / 3600),
                minute:  Math.floor ( (this.state.timer % 3600) /60),
                second:  Math.floor ( this.state.timer % 60)
            })
                }},1000
                 )
}
    
 Start=()=>{
    this.setState ({isOn: ! (this.state.isOn)})
      }
   
    Reset=()=>{
       
        this.setState({ timer:0,second:0,minute:0,hour:0,isOn:false});
        clearInterval()

    }
     
    render(){
        return (
        <div className="time-container">
            <div className="cadre">
            <div className="timer">
                   <h1>{String(this.state.hour).padStart(2,'0')}:{String(this.state.minute).padStart(2,'0')}:{String(this.state.second).padStart(2,'0')}</h1>
              <div className="time-item">
                <h3>Hours</h3>
                 <h3>Minutes</h3>
                 <h3>Seconds</h3>
              </div>
            </div>
            <div className="boutton">
                <button className="boutton-aff" onClick={this.Start}>Start</button>
                <button className="boutton-aff1" onClick={this.Reset}>Reset</button>
            </div>
        </div>
        </div>
        )}}
  export default Timer

