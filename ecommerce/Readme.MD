
Userstory:
This product will be a fully functioning eCommerce website from start to checkout functionality. Users will have the ability to add multiple products to cart, 


Templates

This project will focus on 3 main templates, store.html, cart.html and checkout.html. 


Models: 
![Screen Shot 2021-02-19 at 3 57 24 PM](https://user-images.githubusercontent.com/68258139/108574216-98a7e680-72cb-11eb-8c6b-89eb0ac591b5.png)




1. USER - Built in Django user model,  instance created for each customer who registers.

2. CUSTOMER - Along with a User model, each customer will contain a Customer model that holds a one to one relationship to each user. (OneToOneFied)

3. PRODUCT - The product model represents product types we have in store.

4. ORDER - The order model will represent a transaction that is placed or pending. The model will hold information such as the transaction ID, data completed and order status. This model will be a child or the customer model but a parent to Order Items.

5. ORDERITEM - An order Item is one item with an order. For example, a shopping cart may consist of many items but is all part of one order. Therfore the OrderItem model will be a child of the PRODUCT model AND the ORDER Model.

6. SHIPPING - Not every order will need shipping information. For orders containing physical products that need to be shipping we will need to create an instance of the shipping model to know where to send the order. Shipping will simply be a child of the order model when necessary.
