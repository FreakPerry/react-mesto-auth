import Popup from './Popup';

function PopupWithForm({ title, name, children, isOpen, onClose, buttonText, onSubmit }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form className="popup__form" name={`${name}-form`} noValidate onSubmit={onSubmit}>
        {children}
        <button className="popup__save-button" type="submit">
          {buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
