import { Card } from './Card.js';
import { Popup } from './Popup.js';
import { FormValidator } from './FormValidator.js';

const sectionElementCard = document.querySelector('.elements'); //Секция 

// добавляем карточки
initialCards.forEach((cardItem) => {
  const cardElement = new Card(cardItem);
  sectionElementCard.append(cardElement.element);
});

document.querySelector('.profile__add').addEventListener('click', event => {
  const popup = new Popup({}, 'newPhoto');
  const formPopup = popup.element.querySelector('.popup__form');

  formPopup.addEventListener('submit', event => {
    event.preventDefault();

    const validate = new FormValidator(formPopup);

    if (!validate.validate()) return false;

    const card = new Card({
      name: formPopup.querySelector('input[name="input-name"]').value,
      link: formPopup.querySelector('input[name="input-place"]').value
    });

    sectionElementCard.prepend(card.element);
    popup.close();
  });
});


const profileNameEl = document.querySelector('.profile__name');
const profileTextEl = document.querySelector('.profile__professional');

document.querySelector('.profile__edit').addEventListener('click', event => {
  const popup = new Popup({
    name: profileNameEl.innerHTML,
    text: profileTextEl.innerHTML
  }, 'editProfile');

  const formPopup = popup.element.querySelector('.popup__form');

  formPopup.addEventListener('submit', event => {
    event.preventDefault();
    
    const validate = new FormValidator(formPopup);

    if (!validate.validate()) return false;

    profileNameEl.innerHTML = formPopup.querySelector('input[name="input-name"]').value;
    profileTextEl.innerHTML = formPopup.querySelector('input[name="input-profile"]').value;
    popup.close();
  });

});