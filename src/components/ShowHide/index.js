// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    secondName: false,
  }

  onFirstName = () => {
    const {firstName} = this.state
    if (firstName === false) {
      this.setState({firstName: true})
    } else {
      this.setState({firstName: false})
    }
  }

  onSecondName = () => {
    const {secondName} = this.state
    if (secondName === false) {
      this.setState({secondName: true})
    } else {
      this.setState({secondName: false})
    }
  }

  render() {
    const {firstName, secondName} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="btn-container">
          <button type="button" className="btn" onClick={this.onFirstName}>
            Show/Hide Firstname
          </button>
          <button type="button" className="btn" onClick={this.onSecondName}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-container">
          {firstName ? (
            <div className="name">
              <p>Joe</p>
            </div>
          ) : null}
          {secondName ? (
            <div className="name">
              <p>Jonas</p>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
