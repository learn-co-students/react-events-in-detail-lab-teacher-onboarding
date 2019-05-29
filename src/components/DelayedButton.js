// Code DelayedButton Component Here
import React, { Component } from 'react';
export default class DelayedButton extends Component {

  delayedLog = (event) => {
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
    return (
      <button onClick={ this.delayedLog() }>
      Delayed</button>
    )
  }
  // delayedLog(event,callback,delay){
  //   setTimeout(function(event){
  //     callback(event)
  //   },
  //   delay)
  // }
}
