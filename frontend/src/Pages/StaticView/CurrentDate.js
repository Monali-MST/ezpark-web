import React, { Component } from 'react';

class CurrentDate extends Component {
  getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  render() {
    return (
      <div>
        <p>{this.getCurrentDate()}</p>
      </div>
    );
  }
}

export default CurrentDate;