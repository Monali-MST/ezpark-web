import React, { useState } from 'react';
import './EmailVerify.css';

function EmailVerify() {
  const [otp, setOtp] = useState('');

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('OTP entered: ' + otp);
  };

  return (
    <div className="App">
      <h1>OTP Verification</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            maxLength={6}
            minLength={6}
            required
          />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default EmailVerify;
