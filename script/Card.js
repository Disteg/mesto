import {Popup} from './Popup.js';

export class Card {
  static elTemplate = document.querySelector('#template-card').innerHTML;

  constructor({
    link = false,
    name = false,
  } = {}) {
    if (!link || !name) return;

    this.link = link;
    this.name = name;

    this.render();
    this.addEventListener();
  }

  get template() {
    const template = Card.elTemplate;
    return template.replaceAll('{{name}}', this.name).replaceAll('{{link}}', this.link);
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    return this.element;
  }

  addEventListener() {
    this.element.addEventListener('click', event => {
      const deleteBtn = event.target.closest('.element__delete');
      const likeBtn = event.target.closest('.element__like');
      const imgBtn = event.target.closest('.element__photo');

      if (deleteBtn) {
        this.element.remove();
      }
      if (likeBtn) {
        event.target.classList.toggle('element__like_active');
      }
      if (imgBtn) {
        new Popup({
            name: this.name,
            link: this.link
          },
          'photo'
        );
      }
    });
  }
}