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

// This loop pushes the weight property of each object in the bikes array 

for (let i = 0; i < bikes.length; i++) {
  thisBike = bikes[i];
  const bikeWeight = thisBike['weight']
  bikeWeights.push(bikeWeight)
}


// Math.min finds the lowest value between the parenthesis // The "..." in the parenthesis is the spread syntax which makes the math method read the values in the array separately

const lowestWeight = Math.min(...bikeWeights)

// This loop compares the lowest weight to each weight of the bikes array and prints in the console the object with the lowest weight

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

const footballTeams = [
  {
    name: 'Squadra Blu',
    'scored-points': '0',
    'received-penalties': '0',
  },
  {
    name: 'Squadra Rossa',
    'scored-points': '0',
    'received-penalties': '0',
  },
  {
    name: 'Squadra Gialla',
    'scored-points': '0',
    'received-penalties': '0',
  },
  {
    name: 'Squadra Verde',
    'scored-points': '0',
    'received-penalties': '0',
  }
]

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.

for (let i = 0; i < footballTeams.length; i++) {
  const thisFbTeam = footballTeams[i];
  let scoredPoints = thisFbTeam['scored-points'];
  scoredPoints = Math.floor(Math.random() * 11);
  let penaltiesReceived = thisFbTeam['received-penalties'];
  penaltiesReceived = Math.floor(Math.random() * 11);
  console.log(penaltiesReceived, scoredPoints);
}