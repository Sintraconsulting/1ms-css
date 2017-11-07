(function(){
  if (!document.querySelector('.oms-edit') && document.querySelector('.top-image-content')) {
    let topContent = document.querySelector('.top-image-content');
    let topContentBox = topContent.parentNode.parentNode;
    document.querySelector('#top_image').appendChild(topContent);
  }
})();
