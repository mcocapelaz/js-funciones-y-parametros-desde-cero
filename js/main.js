"use strict";

// QUERY SELECTOR

// DATOS

// VARIABLES

const myWordList =  [
  {
    text: 'Pencil',
    total: 6
  },
  {
    text: 'Thermo',
    total: 2
  },
  {
    text: 'TV',
    total: 8
  },
  {
    text: 'Phone',
    total: 4
  }
];

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

function writeMyArray () {
    for (let i = 0; i < myWordList.length; i++) 
        writeThis(myWordList[i].text,myWordList[i].total);       
}

writeMyArray () 

// EVENTOS

//CÓDIGO AL CARGAR LA PÁGINA


fetch(
  "https://beta.adalab.es/ejercicios-extra/js-funciones-y-parametros-desde-cero/data.json"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
