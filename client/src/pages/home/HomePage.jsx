import { Link } from "react-router-dom";
import Card from "./../../components/cards/Card";
import data from "./../../data";
import "./home.css";

const HomePage = () => {
  const products = data.products;

  return (
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
  );
};

export default HomePage;
