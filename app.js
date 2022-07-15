// const formularioQuerySelector = document.querySelector("#form");
// const userName = document.getElementById("userName");
// const userEmail = document.getElementById("userEmail");

const formulario = document.getElementById("formulario");
const userName = document.querySelector("input[name='userName']");
const userEmail = document.querySelector("input[name='userEmail']");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertName = document.getElementById("alertName");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {    
    errores.forEach(item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d-none");

    const errores = [];

    // esto devuelve "true" si existe solo espacios
    // console.log(!userName.value.trim());

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid");
        errores.push({
            tipo: alertName,
            msg: "Formato no válido en el campo nombre, solo letras"
        })
    }else{
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none")
    }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim() ) {
        userEmail.classList.add("is-invalid");
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo válido",
        });
    }else{
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none")
        
    }

    if(errores.length !== 0){
        pintarMensajeError(errores)
        return
    }

    console.log("Formulario enviado");
    pintarMensajeExito()
});



// <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
// integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
// crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
// integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
// crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
// integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
// crossorigin="anonymous"></script>