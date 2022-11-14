"use strict";

const nameInput = document.getElementById("input-name");
const emailInput = document.getElementById("input-email");
const messageInput = document.querySelector("textarea");
const submitBtn = document.querySelector("input[value='Submit']")

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;

function validate() {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name.length == 0) {
        nameInput.classList.add("not-valid");
        return;
    } else if (nameInput.classList.contains("not-valid")) {
        nameInput.classList.remove("not-valid");
    }

    if (email.length == 0 || !emailRegex.test(email)) {
        emailInput.classList.add("not-valid");
        return;
    } else if (emailInput.classList.contains("not-valid")) {
        emailInput.classList.remove("not-valid");
    }

    if (message.length == 0) {
        messageInput.classList.add("not-valid");
        return;
    } else if (messageInput.classList.contains("not-valid")) {
        messageInput.classList.remove("not-valid");
    }

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    location.reload();
}

submitBtn.addEventListener("mousedown", validate);