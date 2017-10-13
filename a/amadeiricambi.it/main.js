(function(){
  // Divide product name
  if(document.querySelector('.product-name a')) {
    let productName = document.querySelectorAll('.product-name a'),
        secondPart = undefined;
        
    for(let i = 0; i < productName.length; i++) {
      if(productName[i].innerHTML.indexOf('-') == -1) continue;
      secondPart = productName[i].textContent.split('-').pop();
      productName[i].innerHTML = productName[i].innerHTML.replace(secondPart, `<span class="second-part">${secondPart}</span>`);
    }
  }
  
  if(document.querySelector('.category-product')) {
    let heading = document.querySelector('.category-product h3');
    heading.innerHTML = heading.innerHTML.replace(heading.textContent.split('-').pop(), `<span class="second-part">${secondPart}</span>`);
  }
  
  //Set target attribute
  if(document.querySelector('.product-item a')) {
    let productHrefs = document.querySelectorAll('.product-item a');

    for(var i = 0; i < productHrefs.length; i++) {
      productHrefs[i].setAttribute('target', '_blank');
    }
  }
})()
