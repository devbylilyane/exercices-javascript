const chrono = document.querySelector("#chrono");
const bouton = document.querySelector("#start");

let secondes = 0;
let interval;
let enCours = false;

bouton.addEventListener("click", () => {
    if (!enCours) {
        interval = setInterval(() => {
            secondes++;
            chrono.textContent = secondes;
        }, 1000);

        bouton.textContent = "Pause";
        enCours = true;
    } else {
        clearInterval(interval);
        bouton.textContent = "Reprendre";
        enCours = false;
    }
});