import { useGlobalContext } from "../../context";
import "./CloseButton.scss";

function CloseButton() {
  const { closeModal } = useGlobalContext();
  return (
    <>
      {" "}
      <button className="btn btn-hipster close-btn" onClick={closeModal}>
        Close
      </button>
    </>
  );
}

export default CloseButton;
