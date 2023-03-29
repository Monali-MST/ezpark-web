import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {//method sets up a setInterval() function that calls the tick() method every second.
    this.intervalID = setInterval(//setInterval(), the component will update the time every second without refreshing the page.
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {//method clears the interval when the component is unmounted, to avoid any unnecessary updates after the component is no longer visible.
    clearInterval(this.intervalID);
  }

  tick() {//The tick() method updates the state with a new Date object representing the current time.
    this.setState({
      currentTime: new Date()
    });
  }

  render() {// Finally, the render() method displays the current time using the toLocaleTimeString() method of the Date object.
    return (
      <div>
        <p>{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default CurrentTime;

