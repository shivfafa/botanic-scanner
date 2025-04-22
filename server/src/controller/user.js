const UserModel = require("../models/user");
const nodemailer = require("nodemailer");

module.exports.register = (req, res) => {
  console.log(req.body);

  UserModel.findOne({ email: req.body.email })
    .then((existingUser) => {
      if (existingUser) {
        res.send({ code: 409, message: "User Already Exist" });
      } else {
        // If the email is unique, create a new user document with the provided data
        const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          mobile: req.body.mobile,
          age: req.body.age,
          c_pwd: req.body.c_pwd,
          address: req.body.address,
        });

        // Save the new user to the database
        newUser
          .save()
          .then(() => {
            res.send({ code: 200, message: "Sign up successful" });
          })
          .catch((err) => {
            res.status(500).send({ code: 500, message: "Sign up Error" });
          });
      }
    })
    .catch((err) => {
      res.send({ code: 500, message: "Server Error" });
    });
};

module.exports.login = (req, res) => {
  console.log(req.body.email);

  //email and password match
  UserModel.findOne({ email: req.body.email })
    .then((result) => {
      console.log(result, "11");

      //match password with req.body.password
      if (result.password !== req.body.password) {
        res.send({ code: 404, message: "password wrong" });
      } else {
        res.send({
          code: 200,
          message: "login successfully",
          token: "hgfd",
          email: result.email,
          name: result.name,
          profile: result.profile,
        });
      }
    })
    .catch((err) => {
      res.send({ code: 500, message: "user not found" });
    });
};

module.exports.otp = async (req, res) => {
  console.log(req.body);

  //  UserModel.findOne({email :req.body.email}).then(result =>{
  //   res.send({code:200, message:'OTP Send'})
  //  }).catch(err=>{
  //   res.send({code:500, message:'User Not Fo'})
  //  })

  let user = await UserModel.findOne({ email: req.body.email });
  // send to user mail
  if (!user) {
    res.send({ code: 500, message: "user not found" });
  }
  if (user) {
    const _otp = Math.floor(100000 + Math.random() * 900000);
    console.log("OTP=", _otp);

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    let info = await transporter.sendMail({
      from: "saqlaincandy773@gmail.com",
      to: req.body.email, // list of receivers
      subject: "OTP", // Subject line
      text: String(_otp),
      html: `<html>
            < body >
            Hello and welcome
        </ >
       </html > `,
    });

    console.log("Your Email", req.body.email);

    if (info.messageId) {
      console.log(info, 84);
      UserModel.updateOne({ email: req.body.email }, { otp: _otp })
        .then((result) => {
          res.send({ code: 200, message: "otp send" });
        })
        .catch((err) => {
          res.send({ code: 500, message: "Server err" });
        });
    } else {
      res.send({ code: 500, message: "Server err" });
    }
  }
};

module.exports.submitotp = (req, res) => {
  console.log(req.body);

  UserModel.findOne({ otp: req.body.otp })
    .then((result) => {
      if (!result) {
        res.status(400).send({ code: 400, message: "Invalid OTP" });
        return;
      }

      // Additional security check - Verify user identity (e.g., through email/phone verification) before updating the password

      // Update the password
      UserModel.updateOne(
        { email: result.email },
        { password: req.body.password }
      )
        .then(() => {
          res.send({ code: 200, message: "Password updated" });
        })
        .catch((err) => {
          res
            .status(500)
            .send({ code: 500, message: "Failed to update password" });
        });
    })
    .catch((err) => {
      res.status(500).send({ code: 500, message: "Server error" });
    });
};
