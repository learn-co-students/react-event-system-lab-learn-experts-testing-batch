const React = require('react');

class Keypad extends React.Component {
  constructor(){
    super();

    this.logMessage = this.logMessage.bind(this);
  }

  logMessage(){
    const message = "Entering password..."
    console.log(message)
  }

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.logMessage} />
      </div>
    )
  }
}

module.exports = Keypad;
