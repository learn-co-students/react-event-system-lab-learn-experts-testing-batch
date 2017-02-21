const React = require('react')

class EyesOnMe extends React.Component{
  constructor() {
    super();

    this.focusEyes = this.focusEyes.bind(this)
    this.lookAway = this.lookAway.bind(this)
  }

  focusEyes(){
    console.log('Good!')
  }

  lookAway(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button onFocus={this.focusEyes} onBlur={this.lookAway}></button>
    )
  }
}

module.exports = EyesOnMe;