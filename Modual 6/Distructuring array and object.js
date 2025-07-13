let person = {

    name : "emon",
    arr :[1,2,3,4,5,6,7],
    address : "Dhaka"
}


// constant DIstucturing rules 

// fisrt  const {properties name } = class name 



const { address} = person;
console.log(address);



// Array Disucturing rules 
/*
Declear in array 
Disucturing rules  const then [] = array name ;
all variable capture is serially access in array

*/

let array2 = [12 ,3 ,4,6,7,8,99]

const [a,b,c] = array2;


console.log(a,b,c);