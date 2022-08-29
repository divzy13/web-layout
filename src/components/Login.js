import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../utilities/Forms";
import "./dashboard.css"
import Dashboard from './dashboard';
import { useAuth } from '../contexts/AuthContext';
import React from 'react';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [validate, setValidate] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [waiting, setWaiting] = useState(false);
  const {signin} = useAuth();
  const navigate = useNavigate();
  const verbose = true;
  console.log('Am in login')

  
  async function submitHandler(e) {
    e.preventDefault()
    setWaiting(true)
    const validate = validateLogin();

    try {
      signin(emailRef.current.value, passwordRef.current.value)
      console.log(emailRef.current.value, passwordRef.current.value)
      navigate('/private')
    } catch (err){
      setError(verbose ? err.message : 'Failed created the account')
      
    } 
    setWaiting(false)
  }

  const validateLogin = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  // const authenticate = (e) => {
  //   e.preventDefault();

  //   const validate = validateLogin();

  //   if (validate) {
  //     setValidate({});
  //     setEmail("");
  //     setPassword("");
  //     console.log("Successfully Login");
  //   }
  // };

  const togglePassword = (e) => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  return (

    <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
      <div className="d-flex flex-column align-content-end">
        <div className="auth-body mx-auto">
          <p>Login to your account</p>
          <div className="auth-form-container text-start">
            <form
              className="auth-form"
              method="POST"
              onSubmit={submitHandler}
              autoComplete={"off"}
            >
              <div className="email mb-3">
                <input
                  type="email"
                  ref={emailRef}
                  className={`form-control ${validate.validate && validate.validate.email
                      ? "is-invalid "
                      : ""
                    }`}
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div
                  className={`invalid-feedback text-start ${validate.validate && validate.validate.email
                      ? "d-block"
                      : "d-none"
                    }`}
                >
                  {validate.validate && validate.validate.email
                    ? validate.validate.email[0]
                    : ""}
                </div>
              </div>

              <div className="password mb-3">
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${validate.validate && validate.validate.password
                        ? "is-invalid "
                        : ""
                      }`}
                    name="password"
                    id="password"
                    value={password}
                    ref={passwordRef}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={(e) => togglePassword(e)}
                  >
                    <i
                      className={
                        showPassword ? "far fa-eye" : "far fa-eye-slash"
                      }
                    ></i>{" "}
                  </button>

                  <div
                    className={`invalid-feedback text-start ${validate.validate && validate.validate.password
                        ? "d-block"
                        : "d-none"
                      }`}
                  >
                    {validate.validate && validate.validate.password
                      ? validate.validate.password[0]
                      : ""}
                  </div>
                </div>

                <div className="extra mt-3 row justify-content-between">
                  <div className="col-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={(e) => setRemember(e.currentTarget.checked)}
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="forgot-password text-end">
                      <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                  <button
                    type="submit"
                    className="button btn-primary w-100 theme-btn mx-auto"
                  >
                    Log In
                  </button>
              </div>
            </form>

            <hr />
            <div className="auth-option text-center pt-2">
              No Account?{" "}
              <Link className="text-link" to="/register">
                Sign up{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
