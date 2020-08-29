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

let SectionElementCard = document.querySelector('.elements'); //Секция

//Попап карточки
const imgPopup = document.querySelector('.imgpopup'); //Объявляем переменную Попапа картинки
const CloseIMGPopupButton = document.querySelector('.imgpopup__close'); //Объявляем переменную кнопки удаления

function AddIMGPopup (cardElement) {
   let imgCard = cardElement.querySelector('.element__img'); //картинка карточки
   imgCard.addEventListener('click' , (event) => { //При нажатие на картинку карточки октрывается попап с данными взятые из создания карточки
       let Cardtext = event.target.parentElement.querySelector('.element__name').textContent
       let imgLink = event.target.src
       let imgPopupеText = document.querySelector('.imgpopup__text'); 
       let imgPopupImg = document.querySelector('.imgpopup__img');
       imgPopupеText.textContent = Cardtext;
       imgPopupImg.src =  imgLink;
       imgPopupImg.alt = Cardtext;
       imgPopupOpen()
   })
}

function imgPopupOpen() {
    imgPopup.classList.toggle('imgpopup__open'); //функция добавления класса
}

CloseIMGPopupButton.addEventListener('click' , imgPopupOpen); //обработчик закрытия

//Добавление карточки

const cardname = CardPopup.querySelector('#cardnamepop'); //id input name
const cardlink = CardPopup.querySelector('#cardlinkpop'); //id input url
function formSubmitCard(evt){//функция добавления
  const newCard = {
      name: cardname.value,
      link: cardlink.value
    };
  evt.preventDefault();
  CloseCardPopup(AddCard); 
  SectionElementCard.prepend(createCard(newCard));
}

CardPopup.addEventListener('submit', formSubmitCard);



//Перебор массива

function createCard(temcard) {
    let cardElement = document.querySelector('#temcard').content.cloneNode(true);
    cardElement.querySelector('.element__name').textContent = temcard.name;
    cardElement.querySelector('.element__img').src = temcard.link;
    cardElement.querySelector('.element__like').addEventListener('click' , (event) => {
        event.target.classList.toggle('element__like_active'); //функция лайка
    });
    cardElement.querySelector('.element__delete').addEventListener('click' , (event) => {
        event.target.closest('.element').remove(); //функия удаления
    });
    AddIMGPopup (cardElement); //Отвечает за попап картинки
    return cardElement;
}

initialCards.forEach((temcard) => {
    SectionElementCard.append(createCard(temcard));
});













  







