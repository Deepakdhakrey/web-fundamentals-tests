// Explain difference between var, let and const by giving examples



// VAR:- It has no restricton 
//    :- In this we can re-declare the variables and re-initialize the same value
//example:- 
var a = 2;
console.log(a);

var a = 2;
console.log(a);



// LET:- it has some restriction like-
//    :- In this we can re-assign the same value but we can not re-declare the same variable
// example:-
let j;
j = 30;
console.log(j);
// if you use 'a' instead of 'j' it will show that the 'a' is already declared.becuase you have used 'a' variable in case of var 




//CONST:-In case of const declaration and initialization should be in same line 
//     :-In this we can not re-declare the same variable
//Example:-
const b=25;
console.log(b);
// you can not do like this 
// const c;
// c=56;
// console.log(b);
// if you do like this it will show that initializer is missing in const declaration