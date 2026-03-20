import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

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

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
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
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4 border-0 rounded-4 shadow-sm">
                  <div className="card-header py-4 bg-white border-0 mt-2">
                    <h5 className="mb-0 fw-bold fs-4">Item List</h5>
                  </div>
                  <div className="card-body px-4 px-md-5">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-light rounded-3 p-2 d-flex justify-content-center align-items-center"
                                style={{ height: "120px" }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", mixBlendMode: "multiply" }}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6 mt-4 mt-lg-0">
                              <p>
                                <strong className="fs-5">{item.title}</strong>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                              <div
                                className="d-flex align-items-center mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn btn-outline-dark px-3 rounded-circle me-3"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mb-0 fs-5 fw-bold">{item.qty}</p>

                                <button
                                  className="btn btn-dark px-3 rounded-circle ms-3"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4 text-muted" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg w-100 py-3 rounded-3 fw-bold shadow-sm"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
