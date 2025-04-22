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
  /* width: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

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
    margin-top: 60px;
    margin-bottom: 20px;
    color: #888888;
    font-size: 14px;
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    input[type='email'] {
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

  .btn {
    margin-top: 20px;

    button[type='submit'] {
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
  }
`;

export default function Forget() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(email);
    axios
      .post('http://localhost:8080/otp', {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate('/recovery');
        } else {
          alert('Email / Server Error.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <Container>
        <div className="title">
          <h3>Forget Password</h3>
          <span>
            Enter Your Email to <br /> Get the OTP
          </span>
        </div>
        <form onSubmit={handleSubmit}> {/* Attach onSubmit handler to the form */}
          <p className="para-1">Enter your Email Here</p>
          <div className="textbox-container">
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="btn">
            <button type="submit">SEND OTP</button>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}


// import { useState } from "react"
// import axios from 'axios'
// import { useNavigate } from "react-router-dom"

// export default function Forget() {
//   const navigate = useNavigate()
//     const [email, setEmail] = useState('')

//     const handleSubmit = () => {
//         console.log(email)
//         axios.post('http://localhost:8080/otp',
//             {
//                 email: email,
//             })
//             .then(res => {
//                 console.log(res.data)
//                 if (res.data.code === 200) {
//                     navigate('/recovery')
//                 } else {
//                     alert('Email / Server Error.')
//                 }
//             }).catch(err => {
//                 console.log(err)
//             })
//     }
//   return (
//     <>
//     <h1 className="center">  Forget Password</h1>
//     <div className="outcard">
//         Email  <input
//             value={email}
//             onChange={(e) => {
//                 setEmail(e.target.value)
//             }}
//             className="inputs"
//             type="text"
//         />
//         <button
//             onClick={handleSubmit}
//             className="btns">
//             SEND OTP </button>
//     </div>
// </>
//   )
// }
