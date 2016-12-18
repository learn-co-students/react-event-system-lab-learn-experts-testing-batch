import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();
 
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress() {
    console.log("Entering password...")
  }

  render(){
    return (
      <input type="password" onKeyUp={this.keyPress} />
    )
  }
}

module.exports = Keypad;