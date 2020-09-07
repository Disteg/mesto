const initialCards = [ 
    { 
        name: 'Архыз', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
    }, 
    { 
        name: 'Челябинская область', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' 
    }, 
    { 
        name: 'Иваново', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' 
    }, 
    { 
        name: 'Камчатка', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
    }, 
    { 
        name: 'Холмогорский район', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' 
    }, 
    { 
        name: 'Байкал', 
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' 
    } 
]; 
 
//Section Card 
 

const sectionElementCard = document.querySelector('.elements'); //Секция 
 
//Попап карточки 
const popupImg = document.querySelector('.popup__img'); //Объявляем переменную Попапа картинки 
const bigPhoto = document.querySelector('.popup__img-photo'); // Большая карточка


 

 

//Добавление карточки 
 
const cardname = addPopup.querySelector('#cardnamepop'); //id input name 

const cardlink = addPopup.querySelector('#cardlinkpop'); //id input url 
function formSubmitCard(evt){//функция добавления 

  const newCard = { 
      name: cardname.value, 
      link: cardlink.value 
    }; 
  evt.preventDefault(); 
  closePopup(popupBtnSave);  
  sectionElementCard.prepend(createCard(newCard)); 
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
