const bouton = document.querySelector("#like");
const message = document.querySelector("#message");

let timer;

bouton.addEventListener("click", function() {
    message.textContent = "Tu as aimé cette publication";
    message.style.opacity = "1";

    clearTimeout(timer);

    timer = setTimeout(function() {
        message.style.opacity = "0";
    }, 3000);
});