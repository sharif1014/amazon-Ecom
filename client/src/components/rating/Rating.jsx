import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./rating.css";
const Rating = (props) => {
  return !props.value ? (
    <div></div>
  ) : (
    <div className="rating">
      <span>
        {props.value >= 1 ? (
          <FaStar />
        ) : props.value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {props.value >= 2 ? (
          <FaStar />
        ) : props.value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {props.value >= 3 ? (
          <FaStar />
        ) : props.value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {props.value >= 4 ? (
          <FaStar />
        ) : props.value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {props.value >= 5 ? (
          <FaStar />
        ) : props.value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="ratingText">
        {props.text ? props.text : ""} {props.numOfReviews} reviews
      </span>
    </div>
  );
};

export default Rating;
