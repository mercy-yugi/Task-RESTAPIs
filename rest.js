// displaying the products list using the query selector all function in the DOM Manipulation.
fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);
 const productelements = document.querySelectorAll('products');
 info.forEach(element => {
 console.log(element);}
 productelements.appendChild(element)
 );
})

.catch(function(error){
 console.log('error',error);
});
// displaying the fruits list using the query selector all function in the DOM Manipulation.
fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);
 const fruitelements = document.querySelectorAll('fruList');
 info.forEach(element => {
 console.log(element);}
 fruuitelements.appendChild(element));
 })
.catch(function(error){
 console.log('error',error);
});

// displaying the vegetables list using the query selector all function in the DOM Manipulation.
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(info) {
 console.log(info);
 const vegetableselements = document.querySelectorAll('vegList');
 info.forEach(element => {
 console.log(element);}
 vegetableselements.appendChild(element));
})
.catch(function(error){
 console.log('error',error);
});