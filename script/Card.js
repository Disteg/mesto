
export class Card {
    constructor(link, name, templateElem) {
        this._link = link
        this._name = name
        this._templateElem = templateElem
    }

    _getTempate() {
        const cardTemp = document.querySelector(this._templateElem).content.querySelector('.element').cloneNode(true)
        return cardTemp
    }

    _likeCard(evt) {
        evt.target.classList.toggle('element__like_active');
    }
    
    _deleteCard(evt) {
        evt.target.closest('.element').remove();
    }

    _openImgPopup(evt){
        const image = evt.target.closest('.element__photo');
        bigPhoto.src = image.src;
       photoText.textContent = this._name;
       openPopup(popupImg);
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._likeCard(evt)
        });

        this._element.querySelector('.element__delete').addEventListener('click', (evt) => {
            this._deleteCard(evt)
        });

    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector("..element__photo").src = this._link;
        this._element.querySelector(".element__name").alt = this._name;
        this._element.querySelector(".element__text").textContent = this._name;
        return this._element;
    }

}

