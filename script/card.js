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

let SectionElementCard = document.querySelector('.elements');

//Перебор массива

function createCard(temcard) {
    let cardElement = document.querySelector('#temcard').content.cloneNode(true);
    cardElement.querySelector('.element__name').textContent = temcard.name;
    cardElement.querySelector('.element__img').src = temcard.link;
    cardElement.querySelector('.element__like').addEventListener('click' , (event) => {
        event.target.classList.add('element__like_active');
    });
    cardElement.querySelector('.element__delete').addEventListener('click' , (event) => {
        event.target.closest('.element').remove();
    });
    return cardElement
}

initialCards.forEach((temcard) => {
    SectionElementCard.append(createCard(temcard));
});


//Добавление карточки

const cardname = CardPopup.querySelector('#cardnamepop');
const cardlink = CardPopup.querySelector('#cardlinkpop');
function formSubmitPic(evt){
  const newCard = {
      name: cardname.value,
      link: cardlink.value
    };
  evt.preventDefault();
  CloseCardPopup(AddCard); 
  SectionElementCard.prepend(createCard(newCard));
}
CardPopup.addEventListener('submit', formSubmitPic);
  





