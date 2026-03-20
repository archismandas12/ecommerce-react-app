import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { extraProducts } from "../data/extraProducts";
import { imageOverrides } from "../data/imageOverrides";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  let componentMounted = true;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        let apiData = await response.clone().json();
        // Apply image overrides for API products with mismatched images
        apiData = apiData.map((p) =>
          imageOverrides[p.id] ? { ...p, image: imageOverrides[p.id] } : p
        );
        let allProducts = [...apiData, ...extraProducts];
        setData(allProducts);
        setFilter(allProducts);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    setActiveCategory(cat);
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5 d-flex justify-content-center flex-wrap gap-3">
          <button className={`btn btn-filter ${activeCategory === "all" ? "active" : ""}`} onClick={() => { setFilter(data); setActiveCategory("all"); }}>All</button>
          <button className={`btn btn-filter ${activeCategory === "men's clothing" ? "active" : ""}`} onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className={`btn btn-filter ${activeCategory === "women's clothing" ? "active" : ""}`} onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className={`btn btn-filter ${activeCategory === "jewelery" ? "active" : ""}`} onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className={`btn btn-filter ${activeCategory === "electronics" ? "active" : ""}`} onClick={() => filterProduct("electronics")}>Electronics</button>
          <button className={`btn btn-filter ${activeCategory === "furniture" ? "active" : ""}`} onClick={() => filterProduct("furniture")}>Furniture</button>
          <button className={`btn btn-filter ${activeCategory === "shoes" ? "active" : ""}`} onClick={() => filterProduct("shoes")}>Shoes</button>
          <button className={`btn btn-filter ${activeCategory === "watches" ? "active" : ""}`} onClick={() => filterProduct("watches")}>Watches</button>
          <button className={`btn btn-filter ${activeCategory === "sports" ? "active" : ""}`} onClick={() => filterProduct("sports")}>Sports</button>
          <button className={`btn btn-filter ${activeCategory === "beauty" ? "active" : ""}`} onClick={() => filterProduct("beauty")}>Beauty</button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card h-100 position-relative" key={product.id} onClick={() => navigate("/product/" + product.id)} style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
                {/* Floating Rating Badge */}
                {product.rating && (
                  <div className="position-absolute top-0 end-0 m-3 z-1">
                    <span className="badge text-dark shadow-sm px-2 py-1 rounded-pill" style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.3)" }}>
                      <i className="fa fa-star text-warning"></i> <span className="fw-bold">{product.rating.rate}</span>
                    </span>
                  </div>
                )}

                <div className="product-img-container border-bottom">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  {/* Category Tag */}
                  <div className="text-uppercase mb-2" style={{ fontSize: "0.75rem", letterSpacing: "1px", fontWeight: "800", color: "var(--primary-color)" }}>
                    {product.category}
                  </div>

                  {/* Clean Title */}
                  <h5 className="card-title fw-bold mb-3 text-truncate" title={product.title}>
                    {product.title}
                  </h5>

                  {/* Bold Price Focus */}
                  <div className="mt-auto mb-4">
                    <span className="fs-3 fw-bolder" style={{ color: "var(--text-main)" }}>${product.price}</span>
                  </div>

                  {/* Horizontal Modern Buttons */}
                  <div className="d-flex gap-2 w-100">
                    <button
                      className="btn btn-card-secondary rounded-4 px-3 d-flex align-items-center justify-content-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        toast.success("Added to cart");
                        addProduct(product);
                      }}
                      title="Add to Cart"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i className="fa fa-plus fs-5"></i>
                    </button>
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-card-primary rounded-4 flex-grow-1 d-flex align-items-center justify-content-center fw-bold text-uppercase"
                      style={{ height: "55px", letterSpacing: "0.5px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">Latest Products</h2>
            <div className="d-flex justify-content-center mb-4">
              <div style={{ width: "60px", height: "4px", background: "linear-gradient(135deg, #6366f1, #ec4899)", borderRadius: "2px" }}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
