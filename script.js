

const carrito = [
{
 id: 198752,
 name: "Tinta DJ27 Color",
 price: 52.95,
 count: 3,
 premium: true
 }, 
 {
 id: 75621,
 name: "Impresora ticketera PRO-201", 
 price: 32.75,
 count: 2,
 premium: true
 }, 
 {
 id: 54657,
 name: "Caja de rollos de papel para ticketera",
 price: 5.95,
 count: 3,
 premium: false
 }, 
 {
 id: 3143,
 name: "Caja de folios DIN-A4 80gr", 
 price: 9.95,
 count: 2,
 premium: false
 }
 ];


 console.log ('<---- Mostrar una estructura de carrito de la compra. ---->'); 

for (let i = 0; i < carrito.length; i++) {
   print(carrito[i]); 
}

function print (showList) {
   console.log('--------------'); 
   for (property in showList) {
      console.log(property + ': ' + showList[property]); 
   }
}

console.log('<----Listar todos los productos. ---->')

for(let i = 0; i < carrito.length; i++) {
console.log('Name : ' + carrito[i].name);
}


 console.log('<----Eliminar el producto con id 54657 del carrito de la compra.---->')

let indice; 

for (let i = 0; i < carrito.length; i++) {
   if (carrito[i].id == 54657) {
      indice = i; 
   }
}

carrito.splice(indice,1); 

for (product of carrito) {
   print(product); 
}

function print(deleteId54657) {
   console.log('------'); 
   for (attr in deleteId54657) {
      console.log(attr.toUpperCase() + ' ' + deleteId54657[attr]); 
   }
}
 

console.log('<----Calcular el total del carrito de la compra.---->'); 

for (product of carrito) {
    product.total = product.price * product.count; 
   }

for (totalShoppingCart of carrito) {
   imprimir(totalShoppingCart); 
}

function imprimir (shoppingCart) {
   console.log('------'); 
   for (attr in shoppingCart) {
      console.log(attr.toUpperCase() + ' ' + shoppingCart[attr]); 
   }
}


 console.log ('<----Filtrar por los productos que sean prime.---->') ; 

 for (showPremium of carrito) {
 if (showPremium.premium) imprimir(showPremium); 
}

function imprimir (showPremium) {
   console.log('------'); 
   for (attr in showPremium) {
      console.log(attr.toUpperCase() + ' ' + showPremium[attr]); 
   }
} 

console.log('<---- OPCIONAL : Si todos los productos son prime que diga "Gastos de envió cero", si no "Con gastos de envío.---->') 
let premium = true; 

for (product of carrito) {
   if (!product.premium) {
      premium = false; 
   }
}

if (premium) {
   console.log('Free delivery');
} else {
   console.log('Sorry! You need to pay for the delivery'); 
}
 
console.log('<---- OPCIONAL : Aplicar un descuento del 5% si la compra es mayor de 50 €.---->') 

   let total = 0; 
   for (product of carrito) {
   total = product.price*product.count; 
   if (total > 50) {
      total = total * 0.95; 
      console.log('You get a discount of 5%. Amount to be paid is : '+ total + '€')
   } else {
     console.log('Sorry! You do not get a discount')
   }
   } 
  
    function print (showDiscountIfYes) {
     console.log('------'); 
     for (attr in showDiscountIfYes) {
        console.log(attr.toUpperCase() + ' ' + showDiscountIfYes[attr]); 
     }
  }
  

 console.log('<---- OPCIONAL : Montarlo con HTML y API de HTML básica. (de esto tendríamos que haber hecho un ejemplo en la parte de dojo / kata).---->') 

 document.write('<h2> Your shopping cart : </h2>')
 for (let product of carrito) {
    document.write('<ul>')
      document.write('<li>' + product.name + ', ID: '+ product.id +'</li>'); 
      document.write ('</ul>'); 
 }