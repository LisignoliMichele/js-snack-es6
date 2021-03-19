// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const biciclette = [
   {
      marca: "bianchi",
      peso: 4000
   },
   {
      marca: "graziella",
      peso: 7000
   },
   {
      marca: "schott",
      peso: 3500
   }
];
let biciclettaLeggera = biciclette[0];
for (let i = 1; i < biciclette.length; i++ ){
   if(biciclette[i].peso < biciclettaLeggera.peso  ){
      biciclettaLeggera = biciclette[i];
   }
};
const {marca, peso} = biciclettaLeggera;
console.log(`la bicicletta piu leggera é la ${marca} che pesa ${peso}g`)