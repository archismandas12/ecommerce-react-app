import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center rounded-4 shadow-sm my-5">
            <h4 className="p-3 display-5 fw-bold">Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark btn-lg mx-4 mt-3 rounded-3 fw-bold px-5 py-3">
              <i className="fa fa-arrow-left me-2"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4 border-0 rounded-4 shadow-sm">
                <div className="card-header py-4 bg-white border-0 mt-2">
                  <h5 className="mb-0 fw-bold fs-4">Order Summary</h5>
                </div>
                <div className="card-body px-4">
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-3">
                      <span className="text-muted">Products ({totalItems})</span>
                      <span className="fw-semibold">${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-3">
                      <span className="text-muted">Shipping</span>
                      <span className="fw-semibold">${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-0 pt-3 border-top">
                      <div>
                        <strong className="fs-5">Total amount</strong>
                      </div>
                      <span>
                        <strong className="fs-4 text-dark">${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4 border-0 rounded-4 shadow-sm">
                <div className="card-header py-4 bg-white border-0 mt-2">
                  <h4 className="mb-0 fw-bold fs-4">Billing address</h4>
                </div>
                <div className="card-body px-4 px-md-5">
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label fw-semibold">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label fw-semibold">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label fw-semibold">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control rounded-3 p-3 bg-light"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label fw-semibold">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label fw-semibold">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label fw-semibold">
                          Country
                        </label>
                        <br />
                        <select className="form-select rounded-3 p-3 bg-light" id="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label fw-semibold">
                          State
                        </label>
                        <br />
                        <select className="form-select rounded-3 p-3 bg-light" id="state" required>
                          <option value="">Choose...</option>
                          <option>Punjab</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label fw-semibold">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-5 text-muted" />

                    <h4 className="mb-4 fw-bold">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label fw-semibold">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label fw-semibold">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label fw-semibold">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label fw-semibold">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-3 p-3 bg-light"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <hr className="my-5 text-muted" />

                    <button
                      className="w-100 btn btn-dark btn-lg py-3 rounded-3 fw-bold shadow-sm"
                      type="submit" disabled
                    >
                      Continue to checkout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
