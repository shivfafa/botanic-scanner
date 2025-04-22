import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 45px 32px 45px 32px;
  text-align: center;

  .toaster {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 8px;
  }

  span {
    color: #888888;
    font-size: 14px;
  }

  .para-1 {
    margin-top: 40px;
    margin-bottom: 10px;
    color: #888888;
    font-size: 14px;
    /* color:${({theme})=>theme.colors.darkgreen} */
  }
  .para-2 {
    margin-top: 30px;
    margin-bottom: 10px;
    color: #888888;
    font-size: 14px;
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .input-container {
      display: flex;
      /* justify-content: center; */
      /* align-items: center; */
      flex-direction: column;
      
      input[type="password"] {
        padding: 12px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        /* margin-right: 8px; */
        flex: 1; /* Set flex-grow to 1 to take up remaining width */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }
    }
  }

  .btn {
    margin-top: 20px;

    button[type="submit"] {
      padding: 12px 16px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.darkgreen};
      border: none;
      cursor: pointer;
      width: 100%; /* Set the width to 100% */

      &:hover {
        background-color: ${({ theme }) => theme.colors.darkgreen};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }`;

export default function Recovery() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    axios
      .post('http://localhost:8080/submitotp', {
        otp: otp,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate('/login');
          alert('Password Updated.');
        } else {
          setErrorMessage('Server error / Wrong OTP');
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage('Server error');
      });
  };

  const checkpwd = (event) => {
    const { value } = event.target;

    // Perform password validation here
    if (value.length < 4) {
      console.log('Password should be at least 6 characters long.');
    }

    // Update the state with the new password
    setPassword(value);
  };

  return (
    <Wrapper>
      <Container>
      <div className="title">
          <h3>Recovery</h3>
          <span>
            Enter OTP to Recover
            <br /> Password
          </span>
        </div>
      <div className='textbox-container'>
        <div className="input-container">
        <p className="para-1">Enter 6 digit OTP sent to your Email</p>
        <input
          style={{ marginBottom: '15px' }}
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
          className="inputs"
          type="password"
          placeholder='OTP'
          required
        />
         <p className="para-2">Generate Your New Password</p>
        <input
          style={{ marginBottom: '20px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputs"
          type="password" 
          placeholder='New Password'
          required
         onBlur={checkpwd}
          // Change type to "password"
        />
        </div>
      </div>
      <div className="btn">
        <button onClick={handleSubmit} type='submit'>
          CHANGE PASSWORD
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      </Container>
    </Wrapper>
  );
}
