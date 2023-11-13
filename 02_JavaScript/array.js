// ARRAY //

const myArr = [1, 2, 3, 4, 5, 6];

// const myHeros=['Shaktiman', 'Nagraj']

// console.log(myArr[4]);

// ++++++++++++Array Methods++++++++++++++++++ //
// myArr.push("hero")
// // console.log(myArr);
// myArr.pop()
// console.log(myArr);
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));
// console.log(myArr.join());


// Slice And Splice



const myn1=myArr.slice(1,3);
console.log("A", myArr);

console.log("B",myn1);
console.log("A", myArr);
console.log("C",myArr.splice(1,3));
console.log("A", myArr);

// Splice manipulates orginal Array where as Slice only get the values from original Value