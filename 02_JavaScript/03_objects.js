// Singleton (created from constructor i.e., Object.create Method)
// object literasls

const mySym= Symbol("key1")
const jsUser={
    name: "Sumit",
    [mySym]:"myKey1", // when refer tyo symbol use square brackets
    age: 27,
    email:"sumit@google.com",
    isLoggedIn: false,
    loggedInDays: ["Monday","Wednesday"]
}

// console.log(jsUser["email"]); // prefered way
// console.log(jsUser.email);
// console.log(typeof jsUser[mySym]);

// jsUser.email="sumit@microfsoft.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email="sumit@gmail.com"
// console.log(jsUser);

jsUser.greeting =function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo =function(){
    console.log(`Hello Js User, ${this.name}`);}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());