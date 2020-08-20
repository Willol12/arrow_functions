//ARROW FUNCTIONS

const marcas = [
  {id:1, nome: 'a'},
  {id:2, nome: 'b'},
  {id:3, nome: 'will'}

];

//sem a arrow function com um parametro somente
//console.log(marcas.find(function(marca){
// return marca.nome === 'a';
//}));

//com a arrow function com um parametro somente
console.log(marcas.find((marca)=>marca.nome === 'will'));

//arrow function sem parametro
//console.log(marcas.find(() => marca.nome === 'a'));
