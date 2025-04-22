import { toast } from "react-hot-toast";

export async function loginValidation(values) {
  const errors = emailVerify(values);
  passwordVerify(values);
  return errors;
}

export async function emailValidation(values) {
  const errors = emailVerify(values);
 
  return errors;
}

export async function usernameValidate(values) {
  const errors = usernameVerify(values);
  
  return errors;
}

export async function passwordValidate(values) {
  const errors = passwordVerify(values);
  return errors;
}

export async function resetpasswordValidation(values) {
  const errors = passwordVerify(values);

  if (values.password !== values.confirm_pwd) {
    errors.confirm_pwd = "Passwords do not match";
    toast.error("Passwords do not match");
  }

  return errors;
}

export async function registerValidation(values) {
  const errors = usernameVerify(values);
  passwordVerify(values);
  emailVerify(values);

  return errors;
}

export async function profileValidation(values) {
  const errors = emailVerify(values);
  passwordVerify(values)
  cpasswordVerify(values)
  nameVerify(values)
  // snameVerify(values)
  return errors;
}

function passwordVerify(values) {
  const errors = {};
  const specialcharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?~]/;
  if (!values.password) {
    errors.password = "Password is required";
    toast.error("Password is required");
  } else if (values.password.includes(" " || "")) {
    errors.password = "Wrong Password";
    toast.error("Wrong Password");
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
    toast.error("Password must be more than 4 characters");
  } else if (!specialcharacters.test(values.password)) {
    errors.password = "Password must have special characters";
    toast.error("Password must have special characters");
  }
  return errors;
}

function cpasswordVerify(values) {
  const errors = {};
  const specialcharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?~]/;
  if (!values.c_pwd) {
    errors.password = "Confirm Password is required";
    toast.error("Confirm Password is required");
  } else if (values.c_pwd.includes(" " || "")) {
    errors.password = "Password Not Match";
    toast.error("Password Not Match");
  } else if (values.password.length < 4) {
    errors.password = "Password Not Match";
    toast.error("Password Not Match");
  } else if (!specialcharacters.test(values.password)) {
    errors.password = "Password Not Match";
    toast.error("Password Not Match");
  }
  else if (values.password !== values.c_pwd) {
    errors.password = "Password Not Match";
    toast.error("Password Not Match");
  }
  return errors;
}


function usernameVerify(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "Username is required";
    toast.error("Username is required");
  } else if (values.username.includes(" " || "") ) {
    errors.username = "Invalid Username";
    toast.error("Invalid Username");
  }
  return errors;
}

function nameVerify(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "name is required";
    toast.error("name is required");
  } else if (values.name.includes(" ") ) {
    errors.name = "Invalid name";
    toast.error("Invalid name");
  }
  return errors;
}

function snameVerify(values) {
  const errors = {};
  if (!values.sname) {
    errors.username = "secondname is required";
    toast.error("secondname is required");
  } else if (values.sname.includes(" " || "") ) {
    errors.sname = "Invalid secondname";
    toast.error("Invalid secondname");
  }
  return errors;
}

function emailVerify(values) {
  const errors = {};
  if (!values.email) {
    errors.username = "Email is required";
    toast.error("Email is required");
  } else if (values.email.includes(" " || "")) {
    errors.username = "Invalid Email";
    toast.error("Invalid Email");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.username = "Invalid Email";
    toast.error("Invalid Email");
  }
  return errors;
}
