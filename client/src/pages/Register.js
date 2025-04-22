import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avator from "../images/avator.jpg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/Validate";
import convertToBase64 from "../helper/Convert";
import cultivation from "../images/cultivation.jpg";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;

`;

const Container1 = styled.div`
  background-color: #ffffff;
  /* border-radius: 8px; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  /* padding: 45px 32px 45px 32px; */
  text-align: center;
  height: 670px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 580px;

  .image-container-1 {
    background-image: url(${cultivation});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  /* border-radius: 8px; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 45px 32px 45px 32px;
  text-align: center;
  width: 300px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  .toaster {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 16px;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 8px;
  }

  span {
    color: #888888;
    font-size: 14px;
  }

  .image {
    margin-bottom: 20px;

    img {
      width: 150px; /* Adjust width as needed */
      height: 150px; /* Adjust height as needed */
      border-radius: 50%;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }

  .textbox-container {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    gap: 1rem;
    margin-top: 40px;
    .input-container {
      display: flex;
      justify-content: center;
      flex-direction: column;

      gap: 1rem;
      input[type="password"] {
        padding: 12px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        /* margin-right: 8px; */
        flex: 1; /* Set flex-grow to 1 to take up remaining width */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
        width: 270px;
      }

      input[type="text"] {
        padding: 12px;
        border-radius: 4px;
        border: none;
        background-color: #f2f2f2;
        /* margin-right: 8px; */
        flex: 1; /* Set flex-grow to 1 to take up remaining width */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: white;
      }

      input[type="email"] {
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
      background-color: ${({ theme }) => theme.colors.darkgreen};
      color: ${({ theme }) => theme.colors.white};
      border: none;
      cursor: pointer;
      width: 100%; /* Set the width to 100% */

      &:hover {
        background-color: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.darkgreen};
      }
    }
  }

  .regText {
    font-size: 12px;
    font-weight: 500;

    .navlink {
      color: red;
      text-decoration: none;
    }
  }
`;

export default function Register() {
  const [file, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    // validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <Wrapper>
      <Toaster className="toaster" reverseOrder={false}></Toaster>
      <Container1>
        <div className="image-container-1"></div>
      </Container1>
      <Container>
        <div className="title">
          <h1>Register</h1>
          <span>Happy to Join You</span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="image">
            <label htmlFor="profile">
              <img src={file || avator} alt="avatar" />
            </label>

            <input
              onChange={onUpload}
              type="file"
              id="profile"
              name="profile"
            />
          </div>

          <div className="textbox-container">
            <div className="input-container">
            <input
                  {...formik.getFieldProps("email")}
                  value={formik.values.email || ""}
                  type="email"
                  placeholder="Email*"
                  required
                />
              <input
                {...formik.getFieldProps("username")}
                type="text"
                placeholder="Username*"
                required
              />
              <input
                {...formik.getFieldProps("password")}
                type="password"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="btn">
            <NavLink>
              <button type="submit">Register</button>
            </NavLink>
          </div>

          <div className="regText">
            <p>
              Already Register?
              <NavLink className="navlink" to="/login">
                LogIn
              </NavLink>
            </p>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
