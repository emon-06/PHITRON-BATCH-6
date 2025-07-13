console.log("hello world")

let countryName = "Bangladesh"
 
const Name = `My country name is ${countryName}`

console.log(Name)



// spread operator  is ...
let a = [1,2,3,4,5,5,6,7,9]
let b = [4 ,5, 6 ,7 ,8 ,999 ,9, 9,100]


console.log([...a , ...b])


console.log(Math.max(...b))