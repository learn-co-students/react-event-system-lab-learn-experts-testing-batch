import React from 'react'

class EyesOnMe extends React.Component{
    constructor(){
      super();
      this.handleFocus = this.handleFocus.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
    }

    handleFocus(){
      console.log('Good!')
    }

    handleBlur(){
      console.log('Hey! Eyes on me!')
    }
    render(){
      return(
        <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Click Me</button>
      )
    }
}

module.exports = EyesOnMe;
