const React = require('react');

export default class EyesOnMe extends React.Component {
  constructor() {
    super()
    this.handleButtonFocus = () => { console.log('Good!') }
    this.handleButtonBlur = () => { console.log('Hey! Eyes on me!') }
  }
  render() {
    return (
      <button onFocus={this.handleButtonFocus} onBlur={this.handleButtonBlur}>Eyes on Me!</button>
    );
  }
}

EyesOnMe.defaultProps = {
  
};

EyesOnMe.propTypes = {
  
};

module.exports = EyesOnMe;