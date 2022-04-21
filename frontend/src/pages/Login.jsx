/** @format */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
     setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const { email, password } = formData;
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <form onSubmit="">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            onChange={onChange}
            required
          />
          <button>LOGIN</button>
          <p>
            don't have an account ? <Link to="/register">register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
