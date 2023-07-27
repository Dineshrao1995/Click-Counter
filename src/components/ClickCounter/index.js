// Write your code here
import {component} from 'react'

class ClickCounter extends component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
      const{count}=this.state
      return(
          <div className="click-bg-con">
              <h1 className="heading">The Button has been clicked {count} times</h1>
              <p className="description">Click the button to increase the count</p>
              <button  className="button" onClick={this.onIncrement}>Click Me</button>
          </div>
      )

  }


  export default ClickCounter