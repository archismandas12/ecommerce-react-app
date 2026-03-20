import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="col-12 text-center">
          <h1 className="display-5 fw-bold mb-3">About Us</h1>
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: "60px", height: "4px", background: "linear-gradient(135deg, #6366f1, #ec4899)", borderRadius: "2px" }}></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 mb-5 border-0" style={{ transition: "all 0.3s ease" }}>
              <p className="lead text-center text-muted mb-4" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Welcome to <strong>React Ecommerce</strong>, your ultimate destination for modern, trendy, and high-quality products. 
                Founded with a passion for bringing the best of global fashion and technology right to your doorstep, we pride ourselves 
                on offering a diverse collection of items that cater to your everyday needs.
              </p>
              <p className="lead text-center text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
                Whether you're looking for the latest in Men's and Women's Fashion, stunning Jewelry, cutting-edge Electronics, or premium Furniture, our curated selection guarantees quality and style. We believe in providing a seamless, secure, and delightful shopping experience, ensuring that every purchase you make is backed by our commitment to customer satisfaction. Thank you for choosing React Ecommerce—where quality meets convenience!
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 text-center mt-5">
          <h2 className="display-6 fw-bold mb-3">Our Products</h2>
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: "60px", height: "4px", background: "linear-gradient(135deg, #6366f1, #a855f7)", borderRadius: "2px" }}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage