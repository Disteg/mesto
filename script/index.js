import { Card } from "./Card.js"
import { FormValidation } from "./FormValidator.js"

const popupImg = document.querySelector('.popup_img'); //Объявляем переменную Попапа картинки 
const bigPhoto = document.querySelector('.popup__image-photo'); // Большая карточка
const photoText = document.querySelector('.popup__img-text'); //текст под фото карточки
const sectionElementCard = document.querySelector('.elements'); //Секция элемента
const templateElem = document.querySelector('#elementTemplate');
const editPopup = document.querySelector('.popup_profile'); // попап редактирования
const addPopup = document.querySelector('.popup_place'); // попап места
const editBtn = document.querySelector('.profile__edit'); // кнопа редактирования 
const addBtn = document.querySelector('.profile__add'); // кнопка места
const profileName = document.querySelector('.profile__name'); //имя аватара
const popupNameInput = document.querySelector('.popup__input_name'); //строка имени
const popupProfileInput = document.querySelector('.popup__input_profile'); //строка профессии
const cardName = document.querySelector('#cardnamepop'); //строка инпута Name места
const cardLink = document.querySelector('#cardlinkpop'); //строка инпута Link места

const profileProfessional = document.querySelector('.profile__professional'); //профессия
const formPopup = document.querySelector('.popup__form'); //форма попапа
const formPopupAdd = document.querySelector('.popup__form_add');//форма места
const closeBtn = document.querySelectorAll('.popup__close'); //кнопка закрытия
const popup = Array.from(document.querySelectorAll('.popup'));

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
};

const editFormValidator = new FormValidator(validationConfig, cardName)
  editFormValidator.enableValidation()

  const addFormValidator = new FormValidator(validationConfig, cardLink)
  addFormValidator.enableValidation()



function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    popup.forEach((popup) => {
      if (popup.classList.remove('popup_open')) {
        closePopup(popup)
      }
    })
  }
}

function closePopupClick(evt) {
  if (evt.target.classList.contains('popup_open')) {
    closePopup(evt.target)
  }
}

function openPopup (popup){
    document.addEventListener('click', closePopupClick)
    document.addEventListener('keyup', closePopupEsc)
    popup.classList.add('popup_open');}

function closePopup(popup){
    document.removeEventListener('click', closePopupClick)
    document.removeEventListener('keyup', closePopupEsc)
    popup.classList.remove('popup_open');
  };
  
addBtn.addEventListener('click', () => {
  openPopup(addPopup);
});

editBtn.addEventListener('click', () => {
  popupNameInput.value =  profileName.textContent;
  popupProfileInput.value =profileProfessional.textContent;
  openPopup(editPopup);});

  closeBtn.forEach((button) => {
    button.addEventListener('click', (event) => {
      closePopup(event.target.closest('.popup'));
    });
  });


function handleFormSubmit (evt) { 
    evt.preventDefault(); 
    profileName.textContent = popupNameInput.value; 
    profileProfessional.textContent = popupProfileInput.value;
    closePopup(editPopup);
} 

formPopup.addEventListener('submit', handleFormSubmit); 

/*
//Перебор массива 
 
function createCard(element) { 
    const cardElement = document.querySelector('#element').content.cloneNode(true); 
    cardElement.querySelector('.element__name').textContent = element.name; 

    cardElement.querySelector('.element__photo').src = element.link; 

    cardElement.querySelector('.element__like').addEventListener('click' , (event) => { 

        event.target.classList.toggle('element__like_active'); //функция лайка 
    }); 
    cardElement.querySelector('.element__delete').addEventListener('click' , (event) => { 

        event.target.closest('.element').remove(); //функия удаления 
    }); 
    cardElement.querySelector('.element__photo').addEventListener('click', event => {
        openPopup(popupImg);
        const image = event.target.closest('.element__photo');
        bigPhoto.src = image.src;
       photoText.textContent = element.name;
    })
    return cardElement; 
} 


//Добавление карточки 



function formSubmitCard(evt){
  evt.preventDefault();
  const newCard = {
  name: cardName.value,
  link: cardLink.value,};
  sectionElementCard.prepend(createCard(newCard));
  formPopupAdd.reset();
  closePopup(addPopup);
}
formPopupAdd.addEventListener('submit', formSubmitCard);
  
  */
 
 initialCards.forEach((carddata) => {
  const cardElement = addElement(carddata.link, carddata.name, templateElem)
  sectionElementCard.append(cardElement)
})











