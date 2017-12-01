(function(){
  var products = document.querySelectorAll('.product-item');

  if(products.length){
    for(var i=0; i < products.length; i++) {
        var productLink = products[i].querySelector('.product-name a').getAttribute('href');
        var productButton = document.createElement('a');
        productButton.classList.add('btn-product', 'btn', 'btn-primary');
        productButton.setAttribute('href', productLink);
        productButton.innerHTML = 'Scopri di più';
        products[i].querySelector('.product_info').appendChild(productButton);
      }
  }
})();
