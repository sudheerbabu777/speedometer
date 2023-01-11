// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <hi className="heading">SPEEDOMETER</hi>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="avatar"
          alt="speedometer"
        />
        <h1 className="speed">
          Speed is 0mph <span className="value"> {speed}</span>
        </h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button box1"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button box2"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
