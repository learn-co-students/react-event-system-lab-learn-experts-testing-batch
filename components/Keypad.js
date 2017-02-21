const React = require('react')

class Keypad extends React.Component{
  constructor(props){
    super();

    this.enterPassword = this.enterPassword.bind(this)
  }

  enterPassword(){
    console.log('Entering password...')
  }

  render(){
    return(
      <input type='password' onKeyUp="enterPassword()"></input>
    )
  }
}

module.exports = Keypad;