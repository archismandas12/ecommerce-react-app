import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { extraProducts } from "../data/extraProducts";
import { imageOverrides } from "../data/imageOverrides";

import { Footer, Navbar } from "../components";
import toast from "react-hot-toast";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      setLoading2(true);
      
      let data;
      if (parseInt(id) > 20) {
        data = extraProducts.find((p) => p.id === parseInt(id));
      } else {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        data = await response.json();
        // Apply image override if one exists for this product
        if (imageOverrides[data.id]) {
          data = { ...data, image: imageOverrides[data.id] };
        }
      }
      setProduct(data);
      setLoading(false);

      if (parseInt(id) > 20) {
        const similar = extraProducts.filter(
          (p) => p.category === data?.category && p.id !== parseInt(id)
        );
        setSimilarProducts(similar);
      } else {
        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const data2 = await response2.json();
        const similar = data2.filter((p) => p.id !== parseInt(id));
        setSimilarProducts(similar);
      }
      setLoading2(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={300} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline={true} />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 py-3 text-center">
              <img
                className="img-fluid product-detail-img rounded-3"
                src={product.image}
                alt={product.title}
                style={{ maxHeight: "450px", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-6 col-sm-12 py-4 py-md-5">
              <h4 className="text-uppercase text-muted" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star text-warning"></i>
              </p>
              <h3 className="display-6 my-4">${product.price}</h3>
              <p className="lead" style={{ lineHeight: "1.8" }}>{product.description}</p>
              <div className="d-flex product-detail-buttons mt-3">
                <button
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => {
                    addProduct(product);
                    toast.success("Added to cart");
                  }}
                >
                  Add to Cart
                </button>
                <Link to="/cart" className="btn btn-dark mx-3 px-4 py-2">
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Loading2 = () => {
    return (
      <>
        <div className="my-4 py-4">
          <div className="similar-products-grid">
            <div><Skeleton height={300} /></div>
            <div><Skeleton height={300} /></div>
            <div><Skeleton height={300} /></div>
            <div><Skeleton height={300} /></div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="similar-products-grid">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card text-center border-0 shadow-sm" onClick={() => navigate("/product/" + item.id)} style={{ cursor: "pointer", transition: "all 0.3s ease" }}>
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: "0.95rem" }}>
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body px-4 pb-4">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-card-primary w-100 mb-2 py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-card-secondary w-100 py-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        addProduct(item);
                        toast.success("Added to cart");
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-4 my-md-5 py-3 py-md-5">
          <div className="">
          <h2 className="">You may also Like</h2>
          {/* Show marquee only on desktop, grid on mobile/tablet */}
          <div className="d-none d-lg-block">
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
          <div className="d-lg-none">
            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
