/* JavaScript code here */
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
   
   //Task 5
   
   function addItem(item) {
       cart.push(item);
       console.log(cart);
   }
   var newItem = {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   };
   addItem(newItem);
   