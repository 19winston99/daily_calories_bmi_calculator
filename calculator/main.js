"use strict";

let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

function calculate() {
    let calories = weight.value * 24 * 1.3;
    let bmi = (weight.value / (height.value * height.value)).toFixed(2);
    let bodyCondition;
    let result = document.querySelector("#result");

    if (bmi == Infinity || bmi == -Infinity) {
        return result.innerText = "Prova ad inserire dei valori validi";
    }
    if (bmi < 16) {
        bodyCondition = "Sottopeso grave";
    } else if (bmi <= 16.99) {
        bodyCondition = "Sottopeso moderato";
    } else if (bmi <= 18.49) {
        bodyCondition = "Sottopeso lieve";
    } else if (bmi <= 21.99) {
        bodyCondition = "Normopeso";
    } else if (bmi <= 29.99) {
        bodyCondition = "Sovrappeso";
    } else if (bmi <= 34.99) {
        bodyCondition = "Obesità lieve (1° classe)";
    } else if (bmi <= 39.99) {
        bodyCondition = "Obesità moderata (2° classe)";
    } else if (bmi > 40) {
        bodyCondition = "Obesità grave (3° classe)";
    } else {
        return result.innerText = "Prova ad inserire dei valori validi";
    }
    result.innerText = "Il tuo bmi è: " + bmi + " => " + bodyCondition + "\n Kcal giornaliere: " + calories
}