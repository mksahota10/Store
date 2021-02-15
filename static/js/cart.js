let updateBtns = document.getElementsByClassName('update-cart')

for(i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        let productId = this.dataset.product
        let action = this.dataset.action 
        console.log('productId:', productId, 'action:', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            updateUserOrder(prodictId, action)
        }
    })
}
function updateUserOrder(productId, action){
    console.log('User is authenticated, sending data...')
}