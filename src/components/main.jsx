import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 rounded-4 overflow-hidden position-relative">
          <img
            className="card-img img-fluid"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="Ecommerce Shopping Hero"
            style={{ objectFit: 'cover', filter: 'brightness(0.5)', width: '100%', height: '100%' }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start p-3 p-md-5">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-3 text-white">Discover <br/>The Latest Trends</h5>
              <p className="card-text fs-5 fs-md-4 mb-4 d-none d-sm-block" style={{ maxWidth: '600px', color: '#e2e8f0' }}>
                Shop our new arrivals and find the perfect style for any occasion. Fresh and premium stock everyday, curated specifically for you.
              </p>
              <button className="btn btn-light btn-lg px-4 py-2 px-md-5 py-md-3 shadow-sm fw-bold">
                Shop Now <i className="fa fa-shopping-bag ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
