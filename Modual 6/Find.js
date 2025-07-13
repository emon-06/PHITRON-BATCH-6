// how to use find function in javascript

/* find hocce es6 ar advance fetuare ata diye jkono akta 
unique value khuje pawa jai array kinba object ar opor 


 */

const Products = [
    { id: 1, Name: "emon" , color: "black"},
    { id: 2, Name: "rifat"  , color: "white"},
    { id: 3, Name: "masud"  , color: "green"},
    { id: 4, Name: "saba"  , color: "black"},
    { id: 5, Name: "zihak"  , color: "green"},
    { id: 6, Name: "sadiya" , color: "black" }

]


// uising loop fiind the value 
for(let i = 0; i<Products.length; i++){

    const findd = Products[i];

    if(findd.id == 5){
        console.log(findd);
    }
}
// use find function and return the main target work 
const result = Products.find(pd => pd.id == 6);
console.log(result);