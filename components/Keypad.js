import React, {Component} from 'react'

class Keypad extends Component {
  constructor() {
    super()

    this.keyUpEvent = this.keyUpEvent.bind(this)
  }

  keyUpEvent() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.keyUpEvent} placeholder='Enter password'/> <br /> <br />
      </div>
    );
  }
}

module.exports = Keypad
