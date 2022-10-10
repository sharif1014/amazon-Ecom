import { useEffect } from "react";
import { FaArrowLeft, FaRegAngry } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { singleProductAction } from "../../redux/actions/productsActions";
import ErrorMessage from "./../../components/error/ErrorMessage";
import Loading from "./../../components/loading/Loading";
import Rating from "./../../components/rating/Rating";
import "./product.css";

const SingleProduct = (props) => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getAProductR);
  const { isLoading, error, product } = productDetails;
  useEffect(() => {
    dispatch(singleProductAction(productId));
  }, [dispatch, productId]);
  const qtyArray = !product
    ? []
    : new Array(product.inStock).fill("").map((_, i) => i + 1);
  if (!product) {
    return (
      <div className="empty dFlex center">
        Product Not Found !
        <span className="dFlex center">
          <FaRegAngry />
        </span>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <div className="product">
          <Link className="link arrow" to="/">
            <FaArrowLeft /> Back to result
          </Link>
          {
            <div className="dFlex top">
              <div className="col-2">
                <img className="large" src={product.image} alt="" />
              </div>
              <div className="col-1">
                <h2>{product.name}</h2>
                <div>
                  <Rating
                    value={product.rating}
                    numOfReviews={product.numReviews}
                  />
                </div>
                <div className="price">Price: ${product.price}</div>
                <p>Description: {product.desc}</p>
              </div>
              <div className="col-1 action actionBody">
                <div>Seller</div>
                <div>
                  <h2>{product.brand}</h2>
                </div>
                <div>
                  <Rating
                    value={product.rating}
                    numOfReviews={product.numReviews}
                  />
                </div>
                <div className="dFlex">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
                <div className="dFlex">
                  <div>Status</div>
                  <div>
                    {product.inStock > 0 ? (
                      <span className="inStock">
                        {product.inStock} Pcs Available
                      </span>
                    ) : (
                      <span className="stockOut">Stock Out</span>
                    )}
                  </div>
                </div>
                <div className="dFlex">
                  <div>Quantity</div>
                  <div>
                    <select>
                      {qtyArray.map((x) => {
                        return (
                          <option value={x} key={x}>
                            {x}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    className={
                      product.inStock > 0 ? "primary fw" : "disabled primary fw"
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
