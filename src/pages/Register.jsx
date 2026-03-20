import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 py-3">
                <h1 className="text-center display-5 fw-bold mb-4">Register</h1>
                <div className="row my-4 h-100">
                    <div className="col-md-6 col-lg-5 col-sm-8 mx-auto">
                        <div className="card p-4 p-md-5 rounded-4 shadow-sm border-0" style={{ background: "#f8f9fa" }}>
                            <form>
                                <div className="my-3">
                                    <label htmlFor="Name" className="fw-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 p-3 bg-white"
                                        id="Name"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="Email" className="fw-semibold mb-2">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-3 p-3 bg-white"
                                        id="Email"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="Password" className="fw-semibold mb-2">Password</label>
                                    <input
                                        type="password"
                                        className="form-control rounded-3 p-3 bg-white"
                                        id="Password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="my-3 text-center">
                                    <p>Already have an account? <Link to="/login" className="text-decoration-none text-primary fw-bold">Login</Link></p>
                                </div>
                                <div className="text-center d-grid mt-4">
                                    <button className="btn btn-dark btn-lg py-3 rounded-3 fw-bold shadow-sm" type="submit" disabled>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register;