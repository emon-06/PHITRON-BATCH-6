const Products = [
    { id: 1, Name: "emon" , color: "black"},
    { id: 2, Name: "rifat"  , color: "white"},
    { id: 3, Name: "masud"  , color: "green"},
    { id: 4, Name: "saba"  , color: "black"},
    { id: 5, Name: "zihak"  , color: "green"},
    { id: 6, Name: "sadiya" , color: "black" }

]



// using filter 
// filter ar kaj holo j same value joto gula ase sob print korbe 

const result = Products.filter(pd => pd.color == "black")

console.log(result);