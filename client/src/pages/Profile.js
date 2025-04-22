import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avator from "../images/avator.jpg";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/Validate";
import convertToBase64 from "../helper/Convert";
import axios from "axios";
import cultivation from "../images/contact.jpg";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: lightgray;
`;

const Container1 = styled.div`
  background-color: #ffffff;
  /* border-radius: 8px; */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  /* padding: 45px 32px 45px 32px; */
  text-align: center;
  height: 705px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 870px;

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
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 35px 32px 45px 32px;
  text-align: center;
  width: 400px;

  .toaster {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 5px;
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
    margin-top: 30px;
    .input-container {
      display: flex;
      justify-content: center;
      flex-direction: column;

      gap: 1rem;
      .input-container-1 {
        display: flex;
        justify-content: center;
        align-items: center;
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
          width: 120px;
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
          width: 120px;
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
          width: 210px;
        }

        input[type="number"] {
          padding: 12px;
          border-radius: 4px;
          border: none;
          background-color: #f2f2f2;
          /* margin-right: 8px; */
          flex: 1; /* Set flex-grow to 1 to take up remaining width */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background-color: white;
          width: 210px;
        }

        /* .label {
          font-size: 12px;
          font-weight: 500;
          color: #888888;
          padding: 12px 24px;
        } */
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
  }

  .regText {
    font-size: 15px;
    font-weight: 500;

    .navlink {
      color: red;
      text-decoration: none;
    }
  }
`;

export default function Profile() {
  const [email, setEmail] = useState("example123@gmail.com");
  const [password, setPassword] = useState("example123");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("example123");
  const [mobile, setMobile] = useState("example123");
  const [age, setAge] = useState("example123");

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent form submission

  //   console.log("Email:", formik.values.email);
  //   console.log("Password:", formik.values.password);

  //   axios
  //     .post("http://localhost:8080/register", {
  //       email: formik.values.email,
  //       password: formik.values.password,
  //       name: formik.values.name,
  //       mobile: formik.values.mobile,
  //       address: formik.values.address,
  //       age: formik.values.age,
  //       profile: formik.values.file,
  //     })
  //     .then((res) => {
  //       if (res.data.code === 409) {
  //         alert("User Already Exists");
  //       } else if (res.data.code === 200) {
  //         alert("Registration Successful");
  //       }
  //     })
  //     .catch((err) => {
  //       alert("Error occurred during registration");
  //     });
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
    },
    validate: profileValidation,
    // validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      // Trigger formik's validation to check all form fields
      await formik.validateForm();
      console.log(values)
      // Check if there are any form errors before proceeding with the submission
      if (Object.keys(formik.errors).length === 0) {
        values = await Object.assign(values, { profile: file || "" });
  
        // Now proceed with form submission logic (e.g., axios post)
        axios
          .post("http://localhost:8080/register", {
            email: values.email,
            password: values.password,
            name: values.name,
            mobile: values.mobile,
            address: values.address,
            age: values.age,
            profile: values.profile,
          })
          .then((res) => {
            if (res.data.code === 409) {
              alert("User Already Exists");
            } else if (res.data.code === 200) {
              alert("Registration Successful");
            }
          })
          .catch((err) => {
            console.error("Registration error:", err);
            alert(`Error occurred during registration: ${err.message || err}`);
          });
          
      } else {
        alert("Please fill in all required fields correctly.");
      }
    },
  });
  

  const [file, setFile] = useState();

  const onUpload = async (e) => {
    const bas64 = await convertToBase64(e.target.files[0]);
    setFile(bas64);
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
              value={file}
            />
          </div>

          <div className="textbox-container">
            <div className="input-container">
              <div className="input-container-1">
                <input
                onChange={(e) => {
                  setName(e.target.values);
                }}
                value={name}
                  {...formik.getFieldProps("name")}
                  type="text"
                  placeholder="Name*"
                  required
                />
                <input
                  onChange={(e) => {
                    setEmail(e.target.values);
                  }}
                  value={email}
                  {...formik.getFieldProps("email")}
                  type="email"
                  placeholder="Email*"
                  required
                />
              </div>
              <div className="input-container-1">
                <input
                onChange={(e) => {
                  setMobile(e.target.values);
                }}
                value={mobile}
                  {...formik.getFieldProps("mobile")}
                  type="text"
                  placeholder="Moile No*"
                  required
                />
                <input
                onChange={(e) => {
                  setAge(e.target.values);
                }}
                value={age}
                  {...formik.getFieldProps("age")}
                  type="number"
                  placeholder="Age"
                  required
                />
              </div>

              <div className="input-container-1">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.values);
                  }}
                  {...formik.getFieldProps("password")}
                  type="password"
                  placeholder="Password*"
                  required
                />
                <input
                  {...formik.getFieldProps("c_pwd")}
                  type="password"
                  placeholder="Confirm Password*"
                  required
                />
              </div>

              <div className="input-container-1">
                <input
                onChange={(e) => {
                  setAddress(e.target.values);
                }}
                value={address}
                  {...formik.getFieldProps("address")}
                  type="text"
                  placeholder="Adress"
                  required
                />
              </div>
            </div>
          </div>
          <div className="btn">
            <button  type="submit">
              Register
            </button>
          </div>

          <div className="regText">
            <p>
              Already Register?{" "}
              <NavLink className="navlink" to="/login">
                LoGIn
              </NavLink>
            </p>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}
