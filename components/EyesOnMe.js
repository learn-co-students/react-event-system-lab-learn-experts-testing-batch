import React, {Component} from 'react'

class EyesOnMe extends Component {
  constructor() {
    super()

    this.focusEvent = this.focusEvent.bind(this)
    this.blurEvent = this.blurEvent.bind(this)
  }

  focusEvent() {
    console.log('Good!')
  }

  blurEvent() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Eyes on Me!</button>
      </div>
    );
  }
}

module.exports = EyesOnMe
