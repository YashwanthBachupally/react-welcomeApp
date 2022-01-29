// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSub: false}

  Clicked = () => {
    const {isSub} = this.state
    if (isSub === false) {
      this.setState(prevState => ({prevState.isSub: true}))
    }
    else{
        this.setState(prevState => ({prevState.isSub: false}))
    }
  }

  SubscribeButton = () => {
    const {isSub} = this.state
    return isSub ? <button onClick={this.Clicked}>Subscribed</button> : <button onClick={this.Clicked}>Subscribe</button>
  }

  render() {
    state = {isSub: false}
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thankyou! Happy Learning</p>
        <button type="button" onClick={this.Clicked}>
          {this.SubscribeButton()}
        </button>
      </div>
    )
  }
}

export default Welcome
