import { useGlobalContext } from "../../context";
import "./LikeButton.scss";
import { FiThumbsUp } from "react-icons/fi";

const LikeButton = ({ idMeal }) => {
  const { addToFavorites } = useGlobalContext();
  return (
    <>
      <button className="like-btn" onClick={() => addToFavorites(idMeal)}>
        <FiThumbsUp />
      </button>
    </>
  );
};

export default LikeButton;
