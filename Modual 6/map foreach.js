/* 
map ar kaj holo jkono array ar vitor calculation korte pareh sata array te return kore

 */

const products = [
    { id: 1, Name: "emon" , color: "black"},
    { id: 2, Name: "rifat"  , color: "white"},
    { id: 3, Name: "masud"  , color: "green"},
    { id: 4, Name: "saba"  , color: "black"},
    { id: 5, Name: "zihak"  , color: "green"},
    { id: 6, Name: "sadiya" , color: "black" }

]


const result = products.map(products=>products.id*2)

console.log(result);

// foreach kono kisu return koreh na 
const result2 = products.forEach(products=>{
    console.log(products.id);
   
})
console.log(result2);