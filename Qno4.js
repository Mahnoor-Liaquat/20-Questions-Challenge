// Use the `reduce` method to find the total sum of all even numbers in an array of integers.

const numbers =[1,2,3,4,5,6,7,8,9,10];
const sumOfEven = numbers.reduce((num , evennum) => {
    if (evennum % 2 ==0){
        return num + evennum;
    }
    else{
        return num;
    }
},0);
console.log(sumOfEven);