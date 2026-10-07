// ==========================================
// REGISTRO DE USUARIO
// ==========================================

const formularioRegistro = document.getElementById("registro");

if (formularioRegistro) {

    formularioRegistro.addEventListener("submit", function (evento) {

        evento.preventDefault();

        // Obtener los datos escritos por el usuario
        const usuario = document.getElementById("usuario").value;
        const email = document.getElementById("email").value;
        const contrasena = document.getElementById("contrasena").value;

        // Crear objeto con los datos
        const datosUsuario = {
            usuario: usuario,
            email: email,
            contrasena: contrasena
        };

        // Guardar usuario en LocalStorage
        localStorage.setItem("usuarioRegistrado", JSON.stringify(datosUsuario));

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

        // Enviar al usuario a la pantalla de inicio de sesión
        window.location.href = "Sesion.html";
    });
}


// ==========================================
// INICIO DE SESIÓN
// ==========================================

const formularioSesion = document.getElementById("formSesion");

if (formularioSesion) {

    formularioSesion.addEventListener("submit", function (evento) {

        evento.preventDefault();

        // Obtener los datos ingresados
        const usuarioIngresado = document.getElementById("usuario_sesion").value;
        const contrasenaIngresada = document.getElementById("contrasena_sesion").value;

        // Buscar los datos guardados
        const usuarioGuardado = localStorage.getItem("usuarioRegistrado");

        // Verificar si existe un usuario registrado
        if (!usuarioGuardado) {

            alert("No existe ningún usuario registrado. Primero debes registrarte.");

            window.location.href = "registro.html";

            return;
        }

        // Convertir los datos guardados de JSON a objeto
        const datosUsuario = JSON.parse(usuarioGuardado);

        // Comparar usuario y contraseña
        if (
            usuarioIngresado === datosUsuario.usuario &&
            contrasenaIngresada === datosUsuario.contrasena
        ) {

            alert("¡Inicio de sesión exitoso!");

            // Guardar que el usuario inició sesión
            localStorage.setItem("sesionActiva", "true");

            // Enviar a la página principal
            window.location.href = "pag_principal.html";

        } else {

            alert("Usuario o contraseña incorrectos.");

        }
    });
}

function mostrarMenu(id) {

    const menuSeleccionado = document.getElementById(id);

    const menus = document.querySelectorAll(".sub_menu");

    // Saber si el menú que seleccionamos ya estaba abierto
    const estabaAbierto = menuSeleccionado.classList.contains("activo");

    // Cerramos todos los menús
    menus.forEach(function(menu) {
        menu.classList.remove("activo");
    });

    // Si estaba cerrado, lo abrimos
    if (!estabaAbierto) {
        menuSeleccionado.classList.add("activo");
    }
}