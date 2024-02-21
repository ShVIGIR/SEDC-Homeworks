console.log ("Task 1 - data types");

function funkcija(vnes) {
    return vnes;
}

let result1 = funkcija(null)
let result2 = funkcija(true)
let result3 = funkcija(23);
let result4 = funkcija("23")
let result5 = funkcija()
// let result6 = funkcija(1n)
// let result7 = funkcija(Symbol("lala")) 

console.log(typeof (result1));
console.log(typeof (result2));
console.log(typeof (result3));
console.log(typeof (result4));
console.log(typeof (result5));
// console.log(typeof (result6));
// console.log(typeof (result7));

console.log("Task 1 - data types (corrected)");

function funkcija1 (vnes1){
    return typeof vnes1;
}
console.log(funkcija1(null));
console.log(funkcija1(true));
console.log(funkcija1(23));
console.log(funkcija1("23"));
console.log(funkcija1());
// console.log(funkcija1(1n));
// console.log(funkcija1(Symbol("lala")));