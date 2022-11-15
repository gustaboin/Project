// FUTURO MENU OCULTABLE //
//document.getElementById(show-menu).style.visibility = "visible"; // show
//document.getElementById(show-menu).style.visibility = "hidden"; // hide

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    nombres: /^[a-zA-Z\s]{1,30}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cantidad: /^\d{1,2}$/ 
}

const camposForm = {
    nombres: true,
    correo: true,
    cantidad: true,
    select: true
}

const formValidate = (e) => {
//console.log(e.target.id);
    switch (e.target.id) {
        case "nombre":
            if(expresiones.nombres.test(e.target.value)){
                document.getElementById('nombre').classList.remove('error-form');
                document.getElementById('nombre').classList.add('nombre');
                document.querySelector('.input-error').classList.remove('input-error-activo');
                document.querySelector('.input-error').classList.add('input-error');
            } else {
                document.getElementById('nombre').classList.add('error-form');
                document.querySelector('.input-error').classList.add('input-error-activo');
            }
        break;
        case "apellido":
            if(expresiones.nombres.test(e.target.value)){
                document.getElementById('apellido').classList.remove('error-form');
                document.getElementById('apellido').classList.add('apellido');
                document.querySelector('.input-error').classList.remove('input-error-activo');
                document.querySelector('.input-error').classList.add('input-error');
            } else {
                document.getElementById('apellido').classList.add('error-form');
                document.querySelector('.input-error').classList.add('input-error-activo');
            }
        break;
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('correo').classList.remove('error-form');
                document.getElementById('correo').classList.add('correo');
                document.querySelector('.input-error-correo').classList.remove('input-error-activo');
                document.querySelector('.input-error-correo').classList.add('input-error-correo');
            } else {
                document.getElementById('correo').classList.add('error-form');
                document.querySelector('.input-error-correo').classList.add('input-error-activo');
            }
        break;
        case "cantidad":
            if(expresiones.cantidad.test(e.target.value)){
                document.getElementById('cantidad').classList.remove('error-form');
                document.getElementById('cantidad').classList.add('cantidad');
                document.querySelector('.input-error-cantidad').classList.remove('input-error-activo');
                document.querySelector('.input-error-cantidad').classList.add('input-error-cantidad');
            } else {
                document.getElementById('cantidad').classList.add('error-form');
                document.querySelector('.input-error-cantidad').classList.add('input-error-activo');
            }
        break;
    }
}

/************* INCONCLUSO ------ FALTAN VALIDAR LOS CAMPOS ANTES DE SUBMIT */
/*const campoValidate = (expresiones, input, campo) => {
    if (expresiones.test(input.value)) {}
}*/



inputs.forEach((input) => {
    input.addEventListener('keyup', formValidate);
    input.addEventListener('blur', formValidate);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
            let correo = document.getElementById('correo').value;
                let cantidad = document.getElementById('cantidad').value;
                let selector = document.getElementById('select').value;          
    console.log(nombre, apellido, correo, cantidad, selector);
     //datosCompra();

/*    if(nombres && correo && cantidad  && select) {
        form.reset();
    }*/
});

//form.addEventListener("click", (e) ={
  //  
//})

/*
function obtenerDatos(){
let nombre = document.getElementsById('nombre').value;
let apellido = document.getElementsById('apellido').value;
alert(nombre + " "+ apellido);
console.log(nombre + " "+ apellido);
}*/