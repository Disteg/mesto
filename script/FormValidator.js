export class FormValidator{
  constructor(element) {
    this.element = element;
  }

  validate() {
    let isError = false;

    this.element.querySelectorAll('input,textarea').forEach(element => {
      if (!element.validity.valid) {
        this.showError(element);
        isError = true;
      } else {
        this.hideError(element);
      }
    });

    return !isError;
  }

  showError(element) {
    const message = element.validationMessage;
    const labelEl = element.parentNode;
    let errorEl = labelEl.querySelector('.popup__input-error_active');
    labelEl.classList.add('popup__input-error_active');
    
    if (errorEl) {
      errorEl.innerHTML = message;
    }
    else{
      errorEl = document.createElement('span');
      errorEl.classList.add('popup__input-error_active');
      errorEl.innerHTML = message;

      labelEl.append(errorEl);
    }
  }

  hideError(element) {
    const labelEl = element.parentNode;
    labelEl.classList.remove('popup__input-error_active');
    const errorEl = labelEl.querySelector('.popup__input-error_active');
    if (errorEl) errorEl.remove();
  }
}