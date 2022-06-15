const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();
const btnesBotones = document.querySelectorAll(".card .btn-outline-primary");

document.addEventListener("click", e => {

    // console.log(e.target.matches(".card .btn-outline-primary"));
    if (e.target.matches(".card .btn-outline-primary")) {
        // console.log("ejecutar agregar al carro");
        agregarAlcarrito(e)
    };

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if(e.target.matches("#carrito .list-group-item .btn-success")){
        btnAumentar(e)
    }

    if(e.target.matches("#carrito .list-group-item .btn-danger")){
        btnDisminur(e)
    }
    
});

let carritoObjeto = [];

const agregarAlcarrito = (e) => {
    //  console.log(e.target.dataset.fruta);

     const producto = {
         titulo: e.target.dataset.fruta,
         id: e.target.dataset.fruta,
         cantidad: 1,
         precio: parseInt(e.target.dataset.precio),
     };

    //  console.log(producto);

     const index = carritoObjeto.findIndex((item) => item.id === producto.id);

    //  console.log(index);

     if(index === -1) {
        carritoObjeto.push(producto);
     } else {
        carritoObjeto[index].cantidad++;
        // carritoObjeto[index].precio = carritoObjeto[index].cantidad * producto.precio;
     }

     console.log(carritoObjeto);

     pintarCarrito();
};

const pintarCarrito = () => {
    carrito.textContent = ""

    carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;

        clone.querySelector(".btn-danger").dataset.id = item.id;
        clone.querySelector(".btn-success").dataset.id = item.id;

        fragment.appendChild(clone);
    })

    carrito.appendChild(fragment);

    pintarFooter();

};

const pintarFooter = () => {
    console.log("pintar footer");
    footer.textContent = "";

    const total = carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0
    );

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("span").textContent = total;

    footer.appendChild(clone);

};

const btnAumentar = (e) => {
    console.log("me diste click ", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(item  => {
        if(item.id === e.target.dataset.id){
            item.cantidad ++;
        };
        return item;
    });

    pintarCarrito();

};

const btnDisminur = (e) => {
    console.log("me diste click ", e.target.dataset.id)

    carritoObjeto = carritoObjeto.filter(item => {
        if(item.id === e.target.dataset.id){
            if(item.cantidad > 0){
                item.cantidad--
                if(item.cantidad === 0) return;
                return item;
            }
        } else {
            return item;
        } 
    });

    console.log(carritoObjeto);

    pintarCarrito();

};