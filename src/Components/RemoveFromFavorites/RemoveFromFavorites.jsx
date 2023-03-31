import { useGlobalContext } from "../../context";
import "./RemoveFromFavorites.scss";

const RemoveFromFavorites = ({ idMeal }) => {
  const { removeFromFavorites } = useGlobalContext();
  return (
    <button className="remove-btn" onClick={() => removeFromFavorites(idMeal)}>
      remove
    </button>
  );
};

export default RemoveFromFavorites;
