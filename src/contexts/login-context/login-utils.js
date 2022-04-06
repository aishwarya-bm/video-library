import axios from "axios";
import { Toast } from "../../components";

 const isEmailValid = email => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email) ? true : false;
  };

  const isPhoneValid = phone => {
    return phone.length === 10 ;
  };

  
  const validateUser = (mobile,email) => {
    if (isPhoneValid(mobile) && !isEmailValid(email)) {
      return {
        email: "Enter a valid email id",
        phone: "",
      };
    } else if (!isPhoneValid(mobile) && isEmailValid(email)) {
      return {
        email: "",
        phone: "Enter a valid mobile number",
      };
    } else if (!isPhoneValid(mobile) && !isEmailValid(email)) {
      return {
        email: "Enter a valid email id",
        phone: "Enter a valid mobile number",
      };
    }
    return {
      phone: "",
      email: "",
    };
  };

  export {isEmailValid,isPhoneValid,validateUser}

const createUser = async (signupForm,setUserErr,setSignupForm,dispatchUser,navigate) => {
    const userErrors = validateUser(signupForm.mobile, signupForm.email);
    setUserErr(userErrors);
    if (userErrors["phone"] || userErrors["email"]) {
      return;
    }
    try {
      const response = await axios.post("api/auth/signup", signupForm);
      if (response.status === 201) {
        setSignupForm({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          mobile: "",
        });
        setUserErr({ email: "", phone: "" });
        dispatchUser({
          type: "SIGNUP_SUCCESS",
          payload: response.data.createdUser,
        });
        localStorage.setItem("userToken", response.data.encodedToken);
        navigate("/");
        Toast({
        message: "Sign up successful.",
        type: "success",
      });
      }
      else{
        Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        Toast({
        message: "Email already exists, use different one.",
        type: "error",
      });
      }
      else
      Toast({
        message: "Signup failed. Please try again.",
        type: "error",
      });
    }
  };

const loginUser = async (loginForm,dispatchUser,navigate) => {
    try {
      const response = await axios.post("api/auth/login", loginForm);
      if (response.status === 200) {``
        localStorage.setItem("userToken", response.data.encodedToken);
        dispatchUser({ type: "SET_USER_LOGIN", payload: response.data.foundUser });
        navigate("/");
        Toast({
        message: "Signed in successfully.",
        type: "success",
      });
      } else {
        Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });     
      }
    } catch (err) {
      Toast({
        message: "Invalid credentials. Please try again.",
        type: "error",
      });
      
    }
  };

const loginFailedActions = (msg,setAlertMsg,setShowAlert) => {
    setAlertMsg(msg);
    setShowAlert(true);
    setTimeout(() => {
        setShowAlert(false);
    }, 5000);
};

const signoutUser = (dispatchUser) => {
    localStorage.removeItem("userToken");
    dispatchUser({ type: "LOGOUT_USER" });
  };

export {createUser,loginUser,loginFailedActions,signoutUser}