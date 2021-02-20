
Userstory:
This product will be a fully functioning eCommerce website from start to checkout functionality. Users will have the ability to add multiple products to cart.


Wire Frame:


![Screen Shot 2021-02-19 at 8 52 45 PM](https://user-images.githubusercontent.com/68258139/108584261-b63d7600-72f4-11eb-838b-b64149511b8f.png)

![Screen Shot 2021-02-19 at 8 47 39 PM](https://user-images.githubusercontent.com/68258139/108584161-fc460a00-72f3-11eb-8697-390e8468abfb.png)

![Screen Shot 2021-02-19 at 8 47 51 PM](https://user-images.githubusercontent.com/68258139/108584182-1e3f8c80-72f4-11eb-977f-3cd9d9a400fd.png)









Templates:

This project will focus on 3 main templates, store.html, cart.html and checkout.html. 


Models: 
![Screen Shot 2021-02-19 at 3 57 24 PM](https://user-images.githubusercontent.com/68258139/108574216-98a7e680-72cb-11eb-8c6b-89eb0ac591b5.png)




1. USER - Built in Django user model,  instance created for each customer who registers.

2. CUSTOMER - Along with a User model, each customer will contain a Customer model that holds a one to one relationship to each user. (OneToOneFied)

3. PRODUCT - The product model represents product types we have in store.

4. ORDER - The order model will represent a transaction that is placed or pending. The model will hold information such as the transaction ID, data completed and order status. This model will be a child or the customer model but a parent to Order Items.

5. ORDERITEM - An order Item is one item with an order. For example, a shopping cart may consist of many items but is all part of one order. Therfore the OrderItem model will be a child of the PRODUCT model AND the ORDER Model.

6. SHIPPING - Not every order will need shipping information. For orders containing physical products that need to be shipping we will need to create an instance of the shipping model to know where to send the order. Shipping will simply be a child of the order model when necessary.
