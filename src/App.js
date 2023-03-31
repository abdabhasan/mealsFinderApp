import "./App.scss";
import { Favorites, Meals, Modal, Search } from "./Sections/index";
import { useGlobalContext } from "./context";
function App() {
  const { showModal } = useGlobalContext();

  return (
    <>
      <Search />
      <Favorites />
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
