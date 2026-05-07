import { logout } from "../../../utils/auth";
import { productos, categorias } from "/data/productos";

// logout
const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
buttonLogout?.addEventListener("click", logout);

// contenedores
const contenedorProductos = document.getElementById("contenedor-productos");
const listaCategorias = document.getElementById("lista-categorias");

// render productos
if (contenedorProductos) {
  productos.forEach(p => {
    contenedorProductos.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}" />
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <span>$${p.precio}</span>
        <button>Comprar</button>
      </div>
    `;
  });
}

// render categorias
if (listaCategorias) {
  categorias.forEach(c => {
    listaCategorias.innerHTML += `<li>${c}</li>`;
  });
}