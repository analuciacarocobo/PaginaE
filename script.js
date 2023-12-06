document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto-card');
    const carrito = document.getElementById('carrito');
    const productosEnCarrito = document.getElementById('productos-en-carrito');
  
    productos.forEach(producto => {
      const btnAgregar = producto.querySelector('.agregar');
      btnAgregar.addEventListener('click', () => {
        const nombre = producto.querySelector('h3').innerText;
        const nuevoProducto = document.createElement('div');
        nuevoProducto.innerHTML = `<p>${nombre} <button class="eliminar">Eliminar</button></p>`;
        productosEnCarrito.appendChild(nuevoProducto);
        const btnEliminar = nuevoProducto.querySelector('.eliminar');
        btnEliminar.addEventListener('click', () => {
          nuevoProducto.remove();
        });
      });
    });
  
    const carritoImg = document.getElementById('carrito-img');
    carritoImg.addEventListener('click', () => {
      if (productosEnCarrito.childElementCount > 0) {
        if (productosEnCarrito.style.display === 'none') {
          productosEnCarrito.style.display = 'block';
        } else {
          productosEnCarrito.style.display = 'none';
        }
      }
    });
  });


  function filtrarPorCategoria(categoria) {
    var tarjetas = document.getElementsByClassName('producto-card');
    
    for (var i = 0; i < tarjetas.length; i++) {
      tarjetas[i].style.display = 'none'; 
      
      if (tarjetas[i].querySelector('.producto-img').alt.toLowerCase().includes(categoria)) {
        tarjetas[i].style.display = 'block'; 
      }
    }
  }

  

function abrirEditor(idTarjeta) {
  const tarjetaActual = document.getElementById(idTarjeta);
  const titulo = tarjetaActual.querySelector('h3').innerText;
  const contenido = tarjetaActual.querySelector('p:nth-of-type(2)').innerText;

  document.querySelector('.ventanaEmergente .titulo').value = titulo;
  document.querySelector('.ventanaEmergente .contenido').value = contenido;
  document.querySelector('.ventanaEmergente').style.display = 'block';
}


function guardarCambios() {
  const nuevoTitulo = document.querySelector('.ventanaEmergente .titulo').value;
  const nuevoContenido = document.querySelector('.ventanaEmergente .contenido').value;

  const tarjetas = document.querySelectorAll('.producto-card');

 
  tarjetas.forEach(tarjeta => {
      tarjeta.querySelector('h3').innerText = nuevoTitulo;
      tarjeta.querySelector('p:nth-of-type(2)').innerText = nuevoContenido;
  });

  document.querySelector('.ventanaEmergente').style.display = 'none';
}

