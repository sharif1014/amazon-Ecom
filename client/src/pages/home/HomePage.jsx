import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/error/ErrorMessage";
import Loading from "../../components/loading/Loading";
import { productsList } from "../../redux/actions/productsActions";
import Card from "./../../components/cards/Card";
import "./home.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.getProductsR);
  const { isLoading, error, products } = productList;
  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="products dFlex center">
          {products.map((product) => {
            return (
              <Link
                className="link"
                to={`/product/${product._id}`}
                key={product._id}
              >
                <Card
                  img={product.image}
                  name={product.name}
                  rating={product.rating}
                  numOfReviews={product.numReviews}
                  price={product.price}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
