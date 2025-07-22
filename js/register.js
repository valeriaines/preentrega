
// Elementos del DOM
const form = document.querySelector('form');
const nombreInput = document.getElementById('nombre');
const apellidoInput = document.getElementById('apellido');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btnRegistrar = document.getElementById('btnRegistrar');
const btnRestablecer = document.getElementById('btnRestablecer');
const mensajeDiv = document.getElementById('mensaje');

// Expresión regular para validación de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para validar todos los campos
function validarFormulario() {
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Validar que todos los campos estén completos
    if (nombre === '' || apellido === '' || email === '' || password === '') {
        return false;
    }

    // Validar formato de email
    if (!emailRegex.test(email)) {
        return false;
    }

    // Validar longitud mínima de contraseña
    if (password.length < 1) {
        return false;
    }

    return true;
}

// Función para mostrar mensaje de éxito
function mostrarExito() {
    mensajeDiv.textContent = `¡Registro exitoso! Bienvenido ${nombreInput.value.trim()} ${apellidoInput.value.trim()}`;
    mensajeDiv.className = 'mensaje exito';
    mensajeDiv.style.display = 'block';
}

// Función para mostrar mensaje de error
function mostrarError() {
    mensajeDiv.textContent = 'Por favor, complete todos los campos correctamente.';
    mensajeDiv.className = 'mensaje error';
    mensajeDiv.style.display = 'block';
}

// Función para limpiar formulario
function limpiarFormulario() {
    form.reset();
    mensajeDiv.style.display = 'none';
}

// Event listener para el botón de registro
btnRegistrar.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir envío del formulario
    
    if (validarFormulario()) {
        mostrarExito();
        // Aquí puedes agregar el código para enviar los datos al servidor
        console.log('Datos del formulario:', {
            nombre: nombreInput.value.trim(),
            apellido: apellidoInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value
        });
    } else {
        mostrarError();
    }
});

// Event listener para el botón de restablecer
btnRestablecer.addEventListener('click', function(event) {
    event.preventDefault();
    limpiarFormulario();
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar mensaje inicialmente
    mensajeDiv.style.display = 'none';
});  
