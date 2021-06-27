const header = document.getElementById('header');

window.onload = function(){
  header.style.visibility = 'hidden';
}

if (window.matchMedia('(min-width:768px)').matches){
  window.addEventListener('scroll', function(event){
    if (window.pageYOffset < 1000 || window.pageYOffset == 0) {
      header.style.visibility = 'hidden';
    } else {
      header.style.visibility = 'visible';
    }
  });
} else {
  window.addEventListener('scroll', function(event){
    if (window.pageYOffset < 330 || window.pageYOffset == 0) {
      header.style.visibility = 'hidden';
    } else {
      header.style.visibility = 'visible';
    }
  });
}
