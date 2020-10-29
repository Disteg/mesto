const editPopup = document.querySelector('.popup_profile'); // попап редактирования
const addPopup = document.querySelector('.popup_place'); // попап места
const editBtn = document.querySelector('.profile__edit'); // кнопа редактирования 
const addBtn = document.querySelector('.profile__add'); // кнопка места
const profileName = document.querySelector('.profile__name');
const popupNameInput = document.querySelector('.popup__input_name');
const popupProfileInput = document.querySelector('.popup__input_profile');
const profileProfessional = document.querySelector('.profile__professional');
const formPopup = document.querySelector('.popup__form');
const formPopupAdd = document.querySelector('.popup__form_add');//форма места
const closeBtn = document.querySelectorAll('.popup__close'); //кнопка закрытия

//Спасибо за ваше терпение, просто эти дни я на нервах весь и хочу успеть сдать всё, чтобы окончательно не вылететь. 

function openPopup (popup){
   popup.classList.add('popup_open');}

function closePopup(popup){
  popup.classList.remove('popup_open');}


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














//Section Card 
 

const sectionElementCard = document.querySelector('.elements'); //Секция 
 
//Попап карточки 
const popupImg = document.querySelector('.popup_img'); //Объявляем переменную Попапа картинки 
const bigPhoto = document.querySelector('.popup__image-photo'); // Большая карточка
const photoText = document.querySelector('.popup__img-text'); //текст под фото карточки


 

  
 
 
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
const cardName = document.querySelector('#cardnamepop'); //id input name 
const cardLink = document.querySelector('#cardlinkpop'); //id input url 


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
  
  
 

initialCards.forEach((element) => { 
    sectionElementCard.append(createCard(element)); 
}); 











