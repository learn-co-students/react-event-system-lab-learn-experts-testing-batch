import React from 'react'

export default class EyesOnMe extends React.Component {
  focusing(){
    console.log('Good!')
  }

  notFocusing(){
      console.log('Hey! Eyes on me!')
  }

  render(){
    return (<button onFocus={this.focusing} onBlur={this.notFocusing}></button>)
  }
}

module.exports = EyesOnMe
