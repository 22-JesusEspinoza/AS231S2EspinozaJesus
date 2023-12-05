function habilitarBoton() {
    var boton = document.querySelector('input[type="submit"]');
    boton.disabled = !document.getElementById('Terminos').checked;
}

document.getElementById('mostrarContraseña').addEventListener('change', function() {
    var contrasenaInput = document.getElementById('Contraseña');
    contrasenaInput.type = this.checked ? 'text' : 'password';
});

document.getElementById('myForm').addEventListener('submit', function (event) {
    // Validar formato de fecha (dd/mm/aaaa)
    var fechaInput = document.getElementById('FechaNacimiento');
    var fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!fechaRegex.test(fechaInput.value)) {
        alert('Formato de fecha no válido. Utiliza dd/mm/aaaa.');
        event.preventDefault();
        return;
    }

    // Validar contraseña (mínimo 6 caracteres con letras y números)
    var contrasenaInput = document.getElementById('Contraseña');
    var contrasena = contrasenaInput.value;
    if (contrasena.length < 6 || !/[a-zA-Z]/.test(contrasena) || !/\d/.test(contrasena)) {
        alert('La contraseña debe tener al menos 6 caracteres, incluyendo letras y números.');
        event.preventDefault();
        return;
    }
});