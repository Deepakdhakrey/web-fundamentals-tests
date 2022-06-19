// return the sum of all the positive numbers
const input = [1,-5,2,10,-30,29,50];
const getpositivearray=(arr)=>{
    return arr.filter(item=>item>0).reduce((a,b)=>a+b)
};
const getnegativearray=(arr)=>{
    return arr.filter(item=>item<0).reduce((a,b)=>a+b)
};
console.log(getpositivearray(input),getnegativearray(input));



// function SummPositive( numbers ) {
//     var sum = 0;
  
//     for(var i = 0; i < numbers.length; i++) {
//       if(numbers[i] > 0) {
//         sum += numbers[i];
//       }
//     }
//     return sum;
//   }
  
//   var sumresult = SummPositive( [ 1,-5,2,10,-30,29,50 ] );
  
//   console.log(sumresult);