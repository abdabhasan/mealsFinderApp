import { useGlobalContext } from "../../context";
import { CloseButton } from "../../Components/index";
import "./Modal.scss";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <aside className="modal-overlay" onClick={closeModal}>
      <div className="modal-container">
        <img src={image} alt="image" className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <CloseButton />
        </div>
      </div>
    </aside>
  );
};

export default Modal;
