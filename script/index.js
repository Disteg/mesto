let profileEditButton = document.querySelector('.profile__edit');
let popupCloseButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup__content');
let popupNameInput = document.querySelector('.popup__input_name');
let popupProffesionalInput = document.querySelector('.popup__input_proffesional');
let profileName = document.querySelector('.profile__name');
let profileProffesional = document.querySelector('.profile__proffesional');

function openPopup() {
    popup.classList.toggle('popup_open');
    
    popupNameInput.value = profileName.textContent;
    popupProffesionalInput.value = profileProffesional.textContent;
}

function closePopup() {
    popup.classList.remove('popup_open');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileProffesional.textContent = popupProffesionalInput.value;
    closePopup(evt);
}

form.addEventListener('submit', formSubmitHandler);

//Открытие попап карточки

let CardPopup = document.querySelector('.card'); //Попап формы карточки

let OpenCardPopup = () =>{
    CardPopup.classList.add('card__open'); } //Функция открытие попапа

let ProfileAddButton = document.querySelector('.profile__add'); //Кнопка открытия/ добавления

ProfileAddButton.addEventListener('click', OpenCardPopup); // Обработчик

//Закрытие покапа карточки

let ClosePopupButton = document.querySelector('.card__close');
let CloseCardPopup = () =>{
    CardPopup.classList.remove('card__open');
}

ClosePopupButton.addEventListener('click', CloseCardPopup );

//Кнопка добавления

let AddCard = document.querySelector('card__creat');