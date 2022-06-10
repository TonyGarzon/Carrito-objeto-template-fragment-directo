const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn-outline-primary");

const carritoObjeto = [];

const agregarAlcarrito = (e) => {
     console.log(e.target.dataset.fruta);

     const producto = {
         titulo: e.target.dataset.fruta,
         id: e.target.dataset.fruta,
         cantidad: 1,
     };

     const index = carritoObjeto.findIndex((item) => item.id === producto.id);

     console.log(index);

     if(index === -1) {
        carritoObjeto.push(producto);
     } else {
        carritoObjeto[index].cantidad++;
     }

     console.log(carritoObjeto);

     pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
    carrito.textContent = ""

    array.forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;

        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);
}

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlcarrito));