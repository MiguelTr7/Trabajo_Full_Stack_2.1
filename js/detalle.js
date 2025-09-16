// Script para manejar la página de detalle de producto
document.addEventListener('DOMContentLoaded', function() {
  cargarDetalleProducto();
});

function cargarDetalleProducto() {
  // Obtener el ID del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productoId = urlParams.get('id');
  
  if (!productoId) {
    mostrarError('No se especificó un producto');
    return;
  }
  
  // Buscar el producto en la base de datos
  const producto = obtenerProductoPorId(productoId);
  
  if (!producto) {
    mostrarError('Producto no encontrado');
    return;
  }
  
  // Renderizar el detalle del producto
  renderizarDetalle(producto);
  
  // Actualizar el título de la página
  document.title = `${producto.nombre} | FerreNova`;
}

function renderizarDetalle(producto) {
  const contenedor = document.getElementById('producto-detalle');
  
  // Generar HTML de especificaciones
  const especificacionesHTML = producto.especificaciones
    .map(spec => `<li><strong>${spec.etiqueta}:</strong> ${spec.valor}</li>`)
    .join('');
  
  contenedor.innerHTML = `
    <div class="detalle-img">
      <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>

    <div class="detalle-info">
      <h2>${producto.nombre}</h2>
      <p class="precio">$${formatearPrecio(producto.precio)}</p>
      <p>${producto.descripcion}</p>

      <ul class="lista-simple" style="margin:8px 0 16px">
        ${especificacionesHTML}
      </ul>

      <div class="detalle-btns">
        <a class="btn btn-secundario" href="productos.html">Volver</a>
        <button class="btn btn-primario btn-add" type="button"
                data-id="${producto.id}" 
                data-name="${producto.nombre}" 
                data-price="${producto.precio}">
          Añadir al carrito
        </button>
      </div>
    </div>
  `;
}

function mostrarError(mensaje) {
  const contenedor = document.getElementById('producto-detalle');
  contenedor.innerHTML = `
    <div class="error" style="text-align: center; padding: 40px;">
      <h2>Error</h2>
      <p>${mensaje}</p>
      <a class="btn btn-primario" href="index.html">Volver al inicio</a>
    </div>
  `;
}