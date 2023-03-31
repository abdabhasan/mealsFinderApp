import { useGlobalContext } from "../../context";
import { LikeButton } from "../index";
import "./SingleMeal.scss";

const SingleMeal = () => {
  const { meals, selectMeal } = useGlobalContext();
  return (
    <>
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>
              <LikeButton idMeal={idMeal} />
            </footer>
          </article>
        );
      })}
    </>
  );
};

export default SingleMeal;
