const marvelHeros=['Spiderman','Ironman','Hulk','Captain America'];
const dcHeros=['Superman','Batman','Flash']

// marvelHeros.push(dcHeros); // Push method add values in the existing array
// console.log(marvelHeros);
// console.log(marvelHeros.length);

const allHeros = marvelHeros.concat(dcHeros);  // concat add and returns value in new array
console.log(allHeros);

const spreadHeros= "A= "+ [...marvelHeros, ...dcHeros];
const spreadHeros2="B= "+ [...allHeros]
console.log(spreadHeros);
console.log(spreadHeros2);



const anotherArray=[1,2,3,4,[5,6,7,8],9,[2,3,[3,4,5,6]]];
const realAnotherArray= anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray('Abhishek')); // asking 

console.log(Array.from('Abhishek')); // Convert to array

console.log(Array.from({Name:"Abhishek"})); // special case for interviews

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));