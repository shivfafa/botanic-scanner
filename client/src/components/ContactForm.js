import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import { NavLink } from 'react-router-dom';
// import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
  .form {
    h1 {
      font-family: "Poppins", sans-serif, "arial";
      font-weight: 600;
      font-size: 50px;
      color: black;
      text-align: center;
      margin-bottom: -20px;
    }

    h4 {
      font-family: "Roboto", sans-serif, "arial";
      font-weight: 400;
      font-size: 20px;
      color: #9b9b9b;
      line-height: 1.5;
      margin-bottom: -20px;
    }

    /* ///// inputs /////*/

    input:focus ~ label,
    textarea:focus ~ label,
    input:valid ~ label,
    textarea:valid ~ label {
      font-size: 0.75em;
      color: #999;
      top: -5px;
      -webkit-transition: all 0.225s ease;
      transition: all 0.225s ease;
    }

    .styled-input {
      float: left;
      width: 293px;
      margin: 1rem 0;
      position: relative;
      border-radius: 4px;
    }

    .styled-input label {
      color: #999;
      padding: 1.3rem 30px 1rem 30px;
      position: absolute;
      top: 10px;
      left: 0;
      -webkit-transition: all 0.25s ease;
      transition: all 0.25s ease;
      pointer-events: none;
    }

    .styled-input.wide {
      width: 650px;
      max-width: 100%;
    }

    input,
    textarea {
      padding: 30px;
      border: 0;
      width: 100%;
      font-size: 1rem;
      background-color: ${({ theme }) => theme.colors.gray};
      color: black;
      border-radius: 4px;
    }

    input:focus,
    textarea:focus {
      outline: 0;
    }

    input:focus ~ span,
    textarea:focus ~ span {
      width: 100%;
      -webkit-transition: all 0.075s ease;
      transition: all 0.075s ease;
    }

    textarea {
      width: 100%;
      min-height: 15em;
    }

    .input-container {
      width: 650px;
      max-width: 100%;
      margin: 20px auto 25px auto;
    }

    .submit-btn {
      /* float: right; */
      padding: 25px 40px 40px 40px;
      /* margin-left: 30px; */
      border-radius: 10px;
      width: 200px;
      height: 40px;
      /* display: block; */
      background-color: ${({ theme }) => theme.colors.darkgreen};
      color: white;
      font-size: 18px;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06),
        0 2px 10px 0 rgba(0, 0, 0, 0.07);
      -webkit-transition: all 300ms ease;
      transition: all 300ms ease;
      text-decoration: none;
    }

    .submit-btn:hover {
      transform: translateY(1px);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
        0 1px 1px 0 rgba(0, 0, 0, 0.09);
      background-color: ${({ theme }) => theme.colors.yellow};
    }

    @media (max-width: 768px) {
      .submit-btn {
        width: 100%;
        float: none;
        text-align: center;
      }
    }

    input[type="checkbox"] + label {
      color: #ccc;
      font-style: italic;
    }

    input[type="checkbox"]:checked + label {
      color: #f00;
      font-style: normal;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();
    const userEmail = form.current["user_email"].value;
    emailjs
      .sendForm(
        "service_3uqmknh",
        "template_it1wshk",
        form.current,
        "zLrmkS3h518x507tC"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
          alert(userEmail);
        },
        (error) => {
          console.log(error.text);
          alert("error");
        }
      );
  };

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const userEmail = form.current["user_email"].value; // Get the user's email from the form

  //   emailjs
  //     .sendForm(
  //       "service_3uqmknh",
  //       "template_it1wshk",
  //       {
  //         user_email: userEmail, // Pass the user's email as a variable to EmailJS
  //         // Other variables you may want to include (e.g., user_name, message, etc.)
  //       },
  //       "zLrmkS3h518x507tC"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form">
            <div className="row">
              <h1>Get In Touch</h1>
            </div>
            <div className="row">
              <h4 style={{ textAlign: "center" }}>
                We'd love to hear from you!
              </h4>
            </div>
            <div className="row input-container">
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <StyledInput
                    type="text"
                    name="user_name"
                    required
                    defaultValue={localStorage.getItem("NAME")}
                  />
                  <label>Name</label>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                  <StyledInput
                    type="email"
                    name="user_email"
                    required
                    defaultValue={localStorage.getItem("EMAIL")}
                  />
                  <label>Email</label>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="styled-input" style={{ float: "right" }}>
                  <StyledInput type="text" required />
                  <label>Phone</label>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="styled-input wide">
                  <StyledTextarea name="message" required></StyledTextarea>
                  <label>Message</label>
                </div>
              </div>

              <input type="submit" value="Send" className="submit-btn" />
            </div>
          </div>
        </form>
      </FormContainer>
      {/* My Project 35152 */}
      {/* <FormContainer >
        <form ref={form} onSubmit={sendEmail}>
      <div className="form">
        <div className="row">
          <h1>Get In Touch</h1>
        </div>
        <div className="row">
          <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
        </div>
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" name="user_name" required />
              <label>Name</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="email" name="user_email" required />
              <label>Email</label>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{ float: 'right' }}>
              <input type="text"  />
              <label>Phone Number</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <StyledTextarea name="message" required></StyledTextarea>
              <label>Message</label>
            </div>
          </div>
          
          <input type="submit" value="Send" className="btn-lrg submit-btn"/>
        </div>
      </div>
      </form>
    </FormContainer> */}
    </>
  );
}
