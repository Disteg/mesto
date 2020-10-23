const editPopup = document.querySelector('.popup_profile'); // Кнопка редактирования 
const addPopup = document.querySelector('.popup_place'); // Кнопка добавления
const editBtn = document.querySelector('.profile__edit'); // 
const addBtn = document.querySelector('.profile__add');
const profileName = document.querySelector('.profile__name');
const popupNameInput = document.querySelector('.popup__input_name');
const popupProfileInput = document.querySelector('.popup__input_profile');
const profileProfessional = document.querySelector('.profile__professional');
const formPopup = document.querySelector('.popup__form');
const closeBtn = document.querySelectorAll('.popup__close');
const popup = document.querySelector('.popup');


function openPopup (popup){ popup.classList.add('popup_open')
  popupNameInput.value =profileName.textContent;
  popupProfileInput.value =profileProfessional.textContent;
}

function closePopup(popup){popup.classList.remove('popup_open');}


addBtn.addEventListener('click', () => {
  openPopup(addPopup);
});

editBtn.addEventListener('click', () => {
  openPopup(editPopup);
});


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


 

 

//Добавление карточки 
 
const cardName = addPopup.querySelector('#cardnamepop'); //id input name 

const cardLink = addPopup.querySelector('#cardlinkpop'); //id input url 
function formSubmitCard(evt){//функция добавления 

  const newCard = { 
      name: cardName.value, 
      link: cardLink.value 
    }; 
  closePopup(addPopup);  
  sectionElementCard.prepend(createCard(newCard));
  evt.preventDefault(); 
} 
 
addPopup.addEventListener('submit', formSubmitCard); 
 
 
 
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
        document.querySelector('.popup__img-text').textContent = element.name;
    })
    return cardElement; 
} 



 

initialCards.forEach((element) => { 
    sectionElementCard.append(createCard(element)); 
}); 














