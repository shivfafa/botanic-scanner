const mongoose = require("mongoose");

module.exports = mongoose.model("user", {
  name: String,
  email: String,
  password: String,
  c_pwd:String,
  mobile:Number,
  age:Number,
  address:String,
  otp:Number,

});
