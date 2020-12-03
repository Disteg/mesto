const TEMPLATES = {
  'default': ``,
  'photo': `
    <img class="popup__image-photo" src="{{link}}" alt="">
    <div class="popup__img-text">{{name}}</div>
  `,
  'newPhoto': `
    <h2 class="popup__title">Новое место</h2>
    <form id='form-place' name="form" class="popup__form popup__form_add" novalidate>
        <label>
            <input type="text" name="input-name" placeholder="Название" class="popup__input popup__input_name" minlength="2" maxlength="30" required />
        </label>
        <label>
            <input type="url" name="input-place" placeholder="Ссылка на картинку" class="popup__input popup__input_place" minlength="2" maxlength="200" required/>
        </label>
        <button id='button-place' type="submit" class="popup__submit-button">Сохранить</button>
    </form>
  `,
  'editProfile': `
    <h2 class="popup__title">Редактировать профиль</h2>
    <form name="form" class="popup__form" novalidate>
        <label>
            <input value="{{name}}" type="text" name="input-name" placeholder="Имя" class="popup__input popup__input_name"  minlength="2" maxlength="40" required/>
        </label>
        <label>
            <input id="input-profile" value="{{text}}" type="text" name="input-profile" placeholder="О себе" class="popup__input popup__input_profile" minlength="2" maxlength="200" required/>
        </label>
        <button type="submit" class="popup__submit-button">Сохранить</button>
    </form>
  `
}

export class Popup {
  static activeElement;
  subElementBody;

  constructor(
    data = {},
    tplName = 'default'
  ){
    if (Popup.activeElement) {
      Popup.activeElement.remove();
    }

    this.tpl = TEMPLATES[tplName];
    this.body = data;

    this.render();
    this.show();
    this.addEventListener();
  }

  get body() {
    return this._body;
  }

  set body(value = {}) {
    let template = this.tpl;
    Object.entries(value).forEach(([key, item]) => {
      template = template.replaceAll(`{{${key}}}`, item);
    });

    this._body = template;
  }

  get template() {
    return `
      <div class="popup">
        <div class="popup__container">
          <button type="button" class="popup__close"></button>
          <div data-element="body">${this.body}</div>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    this.subElementBody = this.element.querySelector('[data-element="body"]');

    Popup.activeElement = this.element;
  }

  addEventListener() {
    this.element.addEventListener('click', event => {
      const closeBtn = event.target.closest('.popup__close');
      const content = event.target.closest('.popup__container');

      if (closeBtn || !content) {
        this.close();
      }
    });

    document.addEventListener('keyup', this.keyUp);
  }

  keyUp = event => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  show() {
    document.body.append(this.element);
    setTimeout( () => {
      this.element.classList.add('popup_open');
    }, 100);
  }

  close() {
    this.element.classList.remove('popup_open');
  }

  destroy() {
    document.removeEventListener('keyup', this.keyUp);
    if (this.element) this.element.remove();
  }
}
