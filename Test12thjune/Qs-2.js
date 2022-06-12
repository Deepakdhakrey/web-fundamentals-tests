// in how many ways can we make loop in array describe each with an example

// Method 1:- for loop simple method:- In this method we give a for loop from index value 0 to index value 1 less tha length of an array
// example:-
let array = [1,4,6,8];
for(let i =0;i<array.length;i++){
    console.log('Method 1', array[i]);
}

// method 2:-for loop of method:- in this method we use for loop but this time simply saying <variable name> of <array name>
//example:-
for( let elements of array){
    console.log('Method 2', elements);
}

// method 3:- while loops:- in this method we use index and increase it upto loop our array
//example:-
let b =0;
while(b<array.length){
    console.log('method 3'. array[b]);
    b++;
}