import React from 'react'

export default class CoordinatesButton extends React.Component {

  buttonClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
        <button onClick={this.buttonClick}>Get Coordinates</button>
      )
  }
}
