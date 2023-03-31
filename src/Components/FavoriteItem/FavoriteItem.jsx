import { useGlobalContext } from "../../context";
import { RemoveFromFavorites } from "../index";
import "./FavoriteItem.scss";

const FavoriteItem = () => {
  const { favorites, selectMeal } = useGlobalContext();
  return (
    <>
      {favorites.map((item) => {
        const { idMeal, strMealThumb: image } = item;
        return (
          <div key={idMeal} className="favorite-item">
            <img
              src={image}
              className="favorites-img img"
              onClick={() => selectMeal(idMeal, true)}
            />
            <RemoveFromFavorites idMeal={idMeal} />
          </div>
        );
      })}
    </>
  );
};

export default FavoriteItem;
