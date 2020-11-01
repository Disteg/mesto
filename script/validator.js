const showError = (
    formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
        inputElement.classList.add(inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(errorClass)
    }

const hideError = (
    formElement, inputElement, { inputErrorClass, errorClass }) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
        inputElement.classList.remove(inputErrorClass)
        errorElement.classList.remove(errorClass)
        errorElement.textContent = ""
    }

const checkValidity = (formElement, inputElement, rest) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, rest)
    } else {
        hideError(formElement, inputElement, rest)
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const setEventListeners = (
    formElement, { inputSelector, submitButtonSelector, ...rest }) => {
        const inputList = Array.from(formElement.querySelectorAll(inputSelector))
        const buttonElement = formElement.querySelector(submitButtonSelector)
        toggleButtonState(inputList, buttonElement, rest)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                checkValidity(formElement, inputElement, rest)
                toggleButtonState(inputList, buttonElement, rest)
            })
        })
    }

const toggleButtonState = (
    inputList, buttonElement, {inactiveButtonClass}) => {
        if (hasInvalidInput(inputList)) {
            buttonElement.classList.add(inactiveButtonClass)
            buttonElement.disabled = true
        } else {
            buttonElement.classList.remove(inactiveButtonClass)
            buttonElement.disabled = false
        }
}

const enableValidation = ({ formSelector, ...rest}) => {
    const formList = Array.from(document.querySelectorAll(formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault()
        })
        setEventListeners(formElement, rest)
    })
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_disabled",
    inputErrorClass: "popup__input_error",
    errorClass: "popup__input-error_active"
})
  