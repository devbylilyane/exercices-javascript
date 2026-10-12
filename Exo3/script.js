// sélection des éléments HTML qu'on veut utiliser
const input = document.querySelector("#tagInput");
const button = document.querySelector("#addTag");
const list = document.querySelector("#tagList");
const message = document.querySelector("#message");

let tags = [];

button.addEventListener("click", function() {
    const tag = input.value;

    message.textContent = "";

    // pose une question: est-ce que le champ est vide ?
    if (tag === "") {
        // petit + si le champ est vide, on affiche un message d'erreur
        message.textContent = "Entre d'abord un tag.";
        return;
    }

    // pose une question: est-ce que le tag existe déjà dans la liste ?
    if (tags.includes(tag)) {
        // affiche un message si le tag existe déjà
        message.textContent = "Ce tag existe déjà ! 🫢";
        // on arrête la fonction ici avec return si le tag existe déjà
        return;
    }

    // ajoute le tag à la liste
    tags.push(tag);

    // crée une nouvelle étiquette pour afficher le tag
    const item = document.createElement("li");
    item.textContent = tag;
    list.appendChild(item);

    // vide le champ après l'ajout du tag
    input.value = "";
});
