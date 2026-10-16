// Weinshop Traubenstiel – Warenkorb-Logik

let anzahlFlaschen = 0;

const warenkorbAnzeige = document.getElementById("warenkorb");
const buttons = document.querySelectorAll(".btn-wein");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const weinName = button.dataset.name;
        anzahlFlaschen = anzahlFlaschen + 1;

        warenkorbAnzeige.textContent =
            "Warenkorb: " + anzahlFlaschen + " Flaschen – zuletzt: " + weinName;
    });
});
