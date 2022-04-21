/** @format */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {};

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
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
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
