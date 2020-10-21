const editPopup = document.querySelector('.popup__profile'); // Кнопка редактирования 
const addPopup = document.querySelector('.popup__place'); // Кнопка добавления
const editBtn = document.querySelector('.profile__edit'); // 
const addBtn = document.querySelector('.profile__add');
const profileName = document.querySelector('.profile__name');
const popupNameInput = document.querySelector('.popup__input_name');
const popupProfileInput = document.querySelector('.popup__input_profile');
const profileProffessional = document.querySelector('.profile__proffesional');
const formPopup = document.querySelector('.popup__form');
const popupBtnSave = document.querySelector('.popup__save');
const closeBtn = document.querySelectorAll('.popup__close');

const openPopup = mod => {
  mod.classList.add('popup_open')
  popupNameInput.value ='';
  popupProfileInput.value ='';
}

const closePopup = mod => {
  mod.classList.remove('popup_open');
}

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
    profileProffessional.textContent = popupProfileInput.value; 
    closePopup(editPopup); 
    popupNameInput.value ='';
    popupProfileInput.value ='';
    
} 

formPopup.addEventListener('submit', handleFormSubmit); 

















