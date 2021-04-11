window.addEventListener('DOMContentLoaded', function(){

  const modalArea = document.getElementById('modalArea');

  const openModal = document.getElementsByClassName('openModal');
  for(i = 0; i < openModal.length; i++){
    openModal[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  };

  const modalBg = document.getElementById('modalBg');
  const closeModal = document.getElementById('closeModal');

  const toggle = [closeModal,modalBg];
  for(let i=0, len=toggle.length ; i<len ; i++){
    toggle[i].addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);
  };

});