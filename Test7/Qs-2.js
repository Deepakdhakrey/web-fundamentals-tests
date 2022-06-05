// write a program to display the cube of the number upto given an integer
let c = Number(prompt("enter the number"));
        let result = 0;
        function cube(n){
            result = n*n*n;
            alert(`cube of ${n} is ${result}`);
        }
        cube(c);