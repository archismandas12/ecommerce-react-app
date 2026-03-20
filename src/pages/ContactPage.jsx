import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="col-12 text-center">
          <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: "60px", height: "4px", background: "linear-gradient(135deg, #6366f1, #ec4899)", borderRadius: "2px" }}></div>
          </div>
        </div>
        <div className="row my-4 h-100 justify-content-center">
          <div className="col-md-6 col-lg-5 col-sm-10 mx-auto">
            <div className="bg-white p-5 rounded-4 shadow-lg border-0 glass">
              <form>
                <div className="form my-3">
                  <label htmlFor="Name" className="fw-semibold text-muted mb-2">Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg border-1 bg-light rounded-3 shadow-sm focus-ring"
                    id="Name"
                    placeholder="Enter your name"
                    style={{ fontSize: "1rem", padding: "0.8rem 1rem" }}
                  />
                </div>
                <div className="form my-4">
                  <label htmlFor="Email" className="fw-semibold text-muted mb-2">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg border-1 bg-light rounded-3 shadow-sm"
                    id="Email"
                    placeholder="name@example.com"
                    style={{ fontSize: "1rem", padding: "0.8rem 1rem" }}
                  />
                </div>
                <div className="form my-4">
                  <label htmlFor="Message" className="fw-semibold text-muted mb-2">Your Message</label>
                  <textarea
                    rows={5}
                    className="form-control form-control-lg border-1 bg-light rounded-3 shadow-sm"
                    id="Message"
                    placeholder="How can we help you?"
                    style={{ fontSize: "1rem", padding: "0.8rem 1rem", resize: "none" }}
                  />
                </div>
                <div className="text-center mt-5">
                  <button
                    className="w-100 py-3 btn fw-bold text-uppercase"
                    style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)", color: "white", borderRadius: "12px", letterSpacing: "1px", boxShadow: "0 4px 15px rgba(168, 85, 247, 0.4)" }}
                    type="submit"
                    disabled
                  >
                    Send Message <i className="fa fa-paper-plane ms-2"></i>
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

export default ContactPage;
