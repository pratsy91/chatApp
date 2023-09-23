import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {};

  return (
    <div className="h-screen bg-primary flex items-center justify-center">
      <div className="bg-white shadow-md p-5 flex flex-col gap-5 w-96">
        <div className="flex gap-2">
          <i className="ri-message-3-line text-2xl text-primary"></i>
          <h1 className="text-2xl uppercase font-semibold text-primary">
            Sheychat Login{" "}
          </h1>
        </div>
        <hr />

        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />

        <button
          className={
            user.email && user.password ? "contained-btn" : "disabled-btn"
          }
          onClick={login}
        >
          LOGIN
        </button>

        <Link to="/register" className="underline">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
