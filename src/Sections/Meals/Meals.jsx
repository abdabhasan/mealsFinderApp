import "./Meals.scss";
import { useGlobalContext } from "../../context";
import { Loader, NoMealsMatched, SingleMeal } from "../../Components/index";
const Meals = () => {
  const { loading, meals } = useGlobalContext();
  if (loading) {
    return <Loader />;
  }
  if (meals.length < 1) {
    return <NoMealsMatched />;
  }
  return (
    <section className="section-center">
      <SingleMeal />
    </section>
  );
};

export default Meals;
