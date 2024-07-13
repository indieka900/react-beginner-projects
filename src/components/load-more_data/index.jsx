/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = 5 - fullStars - (partialStar > 0 ? 1 : 0);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full_${index}`} className="star full">
          ★
        </span>
      ))}
      {partialStar > 0 && (
        <span
          className="star partial"
          style={{ "--percent": `${partialStar * 100}%` }}
        >
          ★
        </span>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty_${index}`} className="star empty">
          ★
        </span>
      ))}
      <span className="rating-value">({rating.toFixed(1)})</span>
    </div>
  );
}

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await res.json();
      setProducts((current) => [...current, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
    if (products && products.length >= 100) setDisableButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, disableButton]);

  if (loading) {
    return (
      <div className="container-l">
        <div className="loading-message">Loading data please wait...</div>
      </div>
    );
  }

  return (
    <div className="container-l">
      <div className="product-container">
        {products && products.length ? (
          products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <div className="price-rating">
                  <p className="price">${product.price}</p>
                  <StarRating rating={product.rating} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>Error occurred</h3>
          </div>
        )}
      </div>
      <div className={!disableButton && "button-container"}>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
      </div>
      <div>
        {disableButton && <p>You have reached a max of 100 products</p>}
      </div>
    </div>
  );
}
