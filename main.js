/* Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
  {
    name: 'rossa',
    weight: '3'
  },
  {
    name: 'verde',
    weight: '4'
  },
  {
    name: 'blu',
    weight: '1'
  },
  {
    name: 'nera',
    weight: '2'
  },
  {
    name: 'gialla',
    weight: '3'
  },
]

const bikeWeights = []

for (let i = 0; i < bikes.length; i++) {
  thisBike = bikes[i];
  const bikeWeight = thisBike['weight']
  bikeWeights.push(bikeWeight)
}


const lowestWeight = Math.min(...bikeWeights)

for (let i = 0; i < bikes.length; i++) {
  thisBike = bikes[i];
  if (lowestWeight == thisBike['weight']) {
    console.log(thisBike);
  }
}






















/*  Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */