import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await api.getUserInfo();
      setCurrentUser(res);
    } catch (e) {
      console.warn(e);
    }
  };

  const fetchCards = async () => {
    try {
      const res = await api.getInitialCards();
      setCards(res);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchCards();
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = card => {
    setSelectedCard(card);
    setIsImageOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  };

  const handleCardLike = async card => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    try {
      const resChangeLikeStatus = await api.changeLikeCardStatus(card, !isLiked);
      setCards(state => state.map(c => (c._id === card._id ? resChangeLikeStatus : c)));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleCardDelete = async card => {
    try {
      await api.deleteCard(card._id);
      setCards(cards => cards.filter(c => c._id !== card._id));
      closeAllPopups();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdateUser = async data => {
    try {
      const changedProfile = await api.editUserInfo(data);
      setCurrentUser(changedProfile);
      closeAllPopups();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleUpdateAvatar = async data => {
    try {
      const changedAvatar = await api.editAvatar(data);
      setCurrentUser(changedAvatar);
      closeAllPopups();
    } catch (e) {
      console.warn(e);
    }
  };

  const handleAddPlacesubmit = async data => {
    try {
      const newCard = await api.addCards(data);
      setCards([newCard, ...cards]);
      closeAllPopups();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlacesubmit}
        ></AddPlacePopup>
        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm'}
          onClose={closeAllPopups}
          buttonText={'Да'}
        >
          <button type="submit" className="popup__save-button">
            Да
          </button>
        </PopupWithForm>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>
        <ImagePopup isOpen={isImageOpen} onClose={closeAllPopups} card={selectedCard} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
