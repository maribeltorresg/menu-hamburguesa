window.addEventListener('load', function() {
  // boton
  var boton = document.getElementById('btn');
  boton.addEventListener('click', function() {
  // nav
    var menu = document.getElementById('opcs-menu');
    // verificamos si tiene el contenido 
    if (menu.classList.contains('disabled-menu')) {
      // console.log('mostrar');
      // remover
      menu.classList.remove('disabled-menu');
      // agregar
      menu.classList.add('enabled-menu');
    } else {
      // console.log('ocultar');
      menu.classList.remove('enebled-menu');
      menu.classList.add('disabled-menu');
    }

  })
  
});
