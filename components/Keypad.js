const React = require('react');

export default class Keypad extends React.Component {
  constructor() {
    super()
    this.enteringPassword = () => console.log('Entering password...');
  }
  render() {
    return (
      <input type="password" onKeyUp={this.enteringPassword} />
    );
  }
}

Keypad.defaultProps = {
  
};

Keypad.propTypes = {
  
};

module.exports = Keypad;