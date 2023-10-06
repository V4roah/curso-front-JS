const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

const cardContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', () => {
    const isCarIconOpen = !aside.classList.contains('inactive')
    if(isCarIconOpen){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
  });

menuHamIcon.addEventListener('click', () => {
    const isCarIconOpen = !aside.classList.contains('inactive')
    if(isCarIconOpen){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
})

menuCarIcon.addEventListener('click', () => {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')

    }

    aside.classList.toggle('inactive')

})

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Pantalla',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Carro',
    price: 12000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

renderProduct(productList)

function renderProduct(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardContainer.appendChild(productCard);
        
    
    }
    
}
