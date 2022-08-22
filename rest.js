// products list
fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);

document.getElementById('products').style.flex = 4
let AllProduct = document.getElementById('products')
info.forEach(a => {
    let ListOfProduct = document.createElement('li')
    ListOfProduct.innerText = `${a.name}`
    AllProduct.appendChild(ListOfProduct)
})
})
.catch(function(error){
 console.log('error',error);
});

// fruits list
fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);

let AllFruits = document.getElementById('fruList')
info.forEach(b => {
    let ListOfFruits = document.createElement('li')
    ListOfFruits.innerText = `${b.name}`
    AllFruits.appendChild(ListOfFruits)
})
})
.catch(function(error){
 console.log('error',error);
});

// vegetables list
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);

let AllVeges = document.getElementById('vegList')
info.forEach(c => {
    let ListOfVeges = document.createElement('li')
    ListOfVeges.innerText = `${c.name}`
    AllVeges.appendChild(ListOfVeges)
})
})
.catch(function(error){
 console.log('error',error);
});