"use strict";

const validMessage = document.getElementById("validation-message");
const firstNameInput = document.getElementById("input-name");
const lastNameInput = document.getElementById("input-ls-name");
const emailInput = document.getElementById("input-email");
const messageInput = document.querySelector("textarea");
const submitBtn = document.querySelector("input[value='Submit']");

const textFields = [firstNameInput, lastNameInput, emailInput, messageInput];

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

function process(field, condition) {
    if (condition) {
        field.classList.add("not-valid");
        return false;
    }

    if (field.classList.contains("not-valid"))
        field.classList.remove("not-valid");

    return true;
}

function validate() {
    let isValid = true;

    for (let i = 0; i < textFields.length; i++) {
        let field = textFields[i];
        let val = field.value.trim();

        isValid = process(field, val.length == 0);

        if (field.getAttribute("type") == "email")
            isValid = process(field, !emailRegex.test(val));
    }

    if (isValid) {
        for (let i = 0; i < textFields.length; i++)
            textFields[i].value = "";

        validMessage.innerText = "Successfully submitted";
        validMessage.classList.add("valid");

        if (validMessage.classList.contains("not-valid"))
            validMessage.classList.remove("not-valid");
    } else {
        validMessage.innerText = "Please make sure all fields are correct";
        validMessage.classList.add("not-valid");

        if (validMessage.classList.contains("valid"))
            validMessage.classList.remove("valid");
    }
}

submitBtn.addEventListener("mousedown", validate);