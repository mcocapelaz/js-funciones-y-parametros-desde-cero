"use strict";

// QUERY SELECTOR

// DATOS

// VARIABLES

// FUNCIONES

function writeThis(word, number) {
  for (let i = 0; i < number; i++) {
    console.log(word);
  }
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

writeThis("Patata", getRandomNumber(10));
writeThis("Aguacate", getRandomNumber(10));
writeThis("Pizza", getRandomNumber(10));

// EVENTOS

//CÓDIGO AL CARGAR LA PÁGINA
