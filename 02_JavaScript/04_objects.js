// const tinderUser= new  Object() // Singleton Object
const tinderUser = {
    id: "123abc",
    name:"Sumit",
    email:"sumit@google.com"


} // Non Singleton Object




//Merging of Object

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

const obj3=Object.assign({}, obj1,obj2) // First Way
const obj4={...obj1,...obj2} // Second Way

// console.log(obj3);
// console.log(obj4); 

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("email"));