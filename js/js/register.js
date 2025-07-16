let txtnombre = document.getElementById('nombre').value;
let txtapellido = document.getElementById('apellido').value;
let txtemail = document.getElementById('email').value;
let txtpassword = document.getElementById('password').value;

/* let btn = document.getElementById('btnRegistrar');
btn.addEventListener('click', mostrarMensaje);
function mostrarMensaje(evt) {
    evt.preventDefault(); // Evita el envío del formulario
    document.getElementById('mensaje').innerHTML = "Registro exitoso. Bienvenido ".concat(txtnombre, " ", txtapellido, "!");
}  */

let btn = document.getElementById('btnRegistrar');
btn.addEventListener('click', function(event) {
  event.preventDefault(); // Evita el envío del formulario

    if (txtnombre === "" || txtapellido === "" || txtemail === "" || txtpassword === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Registro exitoso. Bienvenido " + txtnombre + " " + txtapellido + "!");
  // Limpiar los campos del formulario
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("mensaje").innerHTML = "";

    }
}); 