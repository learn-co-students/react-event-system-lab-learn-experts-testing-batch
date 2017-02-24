const React = require('react')

class EyesOnMe extends React.Component{
  constructor(){
    super();
    this.focEvent = this.focEvent.bind(this)
    this.blrEvent = this.blrEvent.bind(this)
  }
  focEvent(){
    console.log('Good!')
  }

  blrEvent(){
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div>
        <button onFocus={this.focEvent} onBlur={this.blrEvent}>Issa Button</button>
      </div>
    );
  }
 
}

module.exports = EyesOnMe;