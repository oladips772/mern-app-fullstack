/** @format */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };

  const { name, email, password, password2 } = formData;

  return (
    <div className="register_container">
      <div className="register_wrapper">
        <h1>
          <FaUser /> Register
        </h1>
        <form onSubmit="">
          <input
            type="text"
            placeholder="Name"
            value={name}
            id="name"
            name="name"
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            id="email"
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={password2}
            id="password2"
            name="password2"
            onChange={onChange}
          />
          <button>REGISTER</button>
          <p>
            already have an account ? <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
