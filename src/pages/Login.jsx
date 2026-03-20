import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-3">
        <h1 className="text-center display-5 fw-bold mb-4">Login</h1>
        <div className="row my-4 h-100">
          <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
            <div className="card p-4 p-md-5 rounded-4 shadow-sm border-0" style={{ background: "#f8f9fa" }}>
              <form>
                <div className="my-3">
                  <label htmlFor="floatingInput" className="fw-semibold mb-2">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-3 p-3 bg-white"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="floatingPassword" className="fw-semibold mb-2">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-3 p-3 bg-white"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                </div>
                <div className="my-3 text-center">
                  <p>New Here? <Link to="/register" className="text-decoration-none text-primary fw-bold">Register</Link></p>
                </div>
                <div className="text-center d-grid mt-4">
                  <button className="btn btn-dark btn-lg py-3 rounded-3 fw-bold shadow-sm" type="submit" disabled>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
