let selector = document.querySelector('#phone');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector);

let splide = new Splide( '.splide', {
    type   : 'loop',
    padding: '10rem',
  } );
  
splide.mount();