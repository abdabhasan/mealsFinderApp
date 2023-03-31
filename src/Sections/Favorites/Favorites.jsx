import { useGlobalContext } from "../../context";
import "./Favorites.scss";
import { FavoriteItem } from "../../Components/index";

const Favorites = () => {
  const { favorites } = useGlobalContext();
  return (
    <section className="favorites">
      <div className="favorites-content">
        {favorites.length > 0 ? <h5>Favorites</h5> : <h5>No Favorites</h5>}

        <div className="favorites-container">
          <FavoriteItem />
        </div>
      </div>
    </section>
  );
};

export default Favorites;
