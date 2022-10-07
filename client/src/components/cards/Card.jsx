import { FaCartPlus, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <Link className="link" to="/product/:id">
        <img className="Img" src={props.img} alt={props.name} />
      </Link>
      <div className="cardBody">
        <h2 className="productTitle">
          <Link className="link" to="/product/:id">
            {props.name}
          </Link>
        </h2>

        <Link className="link" to="/rating">
          <Rating value={props.rating} text={props.numOfReviews} />
        </Link>
        <div className="price">$ {props.price}</div>
      </div>

      {/* <div className="cardShadow"> */}
      <div className="icons">
        <Link className="link" to="/search">
          <span className="icon">
            <FaSearch />
          </span>
        </Link>
        <Link className="link" to="/rating">
          <span className="icon heart">
            <FaRegHeart />
          </span>
        </Link>
        <Link className="link" to="/cart">
          <span className="icon">
            <FaCartPlus />
          </span>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Card;
