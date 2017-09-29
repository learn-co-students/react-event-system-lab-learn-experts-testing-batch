import React from 'react'

export default class Keypad extends React.Component {
  passwording(){
    console.log('Entering password...');
  }

  render(){
    return (
      <input onKeyUp={this.passwording} type='password'/>
    );
  }
}

module.exports = Keypad
