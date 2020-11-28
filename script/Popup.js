export class Popup {
  static activeElement;

  constructor(
    data = {},
    template = null
  ){
    if (!template) return;

    if (Popup.activeElement) {
      Popup.activeElement.remove();
    }

    this.data = data;
    this.template = document.querySelector(template).innerHTML;

    this.render();
    this.addEventListener();
    this.show();
  }

  get template() {
    let template = this._template;

    Object.entries(this.data).forEach( ([key, item]) => {
      template = template.replaceAll(`{{${key}}}`, item);
    });

    return template;
  }

  set template(value) {
    this._template = value;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;

    Popup.activeElement = this.element;
    return this.element;
  }

  addEventListener() {
    this.element.addEventListener('click', event => {
      const closeBtn = event.target.closest('.popup__close');

      if (closeBtn) {
        this.remove();
      }
    });

    this.element.addEventListener('keyup', event => {
      //this.remove();
    });
  }

  show() {
    document.body.append(this.element);
  }

  remove() {
    this.element.remove();
    Popup.activeElement.remove();
  }
}