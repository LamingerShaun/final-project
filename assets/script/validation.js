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

function updateMessage(message, addClass, removeClass) {
    validMessage.innerText = message;
    validMessage.classList.add(addClass);

    if (validMessage.classList.contains(removeClass))
        validMessage.classList.remove(removeClass);
}

function validate() {
    let count = 0;

    for (let i = 0; i < textFields.length; i++) {
        let field = textFields[i];
        let val = field.value.trim();

        if (!process(field, val.length == 0) ||
            (field.getAttribute("type") == "email" && !process(field, !emailRegex.test(val)))) {

            count++;
        }
    }

    if (count == 0) {
        for (let i = 0; i < textFields.length; i++)
            textFields[i].value = "";

        updateMessage("Successfully submitted", "valid", "not-valid");
    } else {
        updateMessage("Please make sure all fields are correct", "not-valid", "valid");
    }
}

submitBtn.addEventListener("mousedown", validate);