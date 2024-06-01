function toggleFields() {
    const dispositivo = document.getElementById("dispositivo").value;
    const diadema = document.getElementById("diadema").value;
    const segundoMonitor = document.getElementById("segundoMonitor").value;

    const isLaptop = dispositivo === "Portatil";
    const isDesktop = dispositivo === "Escritorio";

<<<<<<< HEAD
    // Toggle sections visibility
    document.getElementById("sectionPortatil").style.display = isLaptop ? 'block' : 'none';
    document.getElementById("sectionEscritorio").style.display = isDesktop ? 'block' : 'none';

    // Toggle diadema fields
    document.getElementById("serialDiadema").disabled = diadema !== "Si";

    // Toggle segundo monitor fields
    document.getElementById("serialMonitor2").disabled = !(isDesktop && segundoMonitor === "Si");
    document.getElementById("activoMonitor2").disabled = !(isDesktop && segundoMonitor === "Si");

    // Toggle fields based on dispositivo type
    document.getElementById("serialDispositivo").disabled = dispositivo === "";
    document.getElementById("activoDispositivo").disabled = dispositivo === "";
    document.getElementById("estadoDispositivo").disabled = dispositivo === "";
}
=======
    diademaInput.addEventListener('input', function() {
        if (this.value) {
            serialDiadema.disabled = false;
        } else {
            serialDiadema.disabled = true;
            serialDiadema.value = '';
        }
    });
});

function validateForm() {
    const numeroCaso = document.getElementById("numeroCaso").value.trim();
    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const campana = document.getElementById("campana").value.trim();
    const correoPersonal = document.getElementById("correoPersonal").value.trim();
    const correoJefe = document.getElementById("correoJefe").value.trim();
    const dispositivo = document.getElementById("dispositivo").value;

    if (!numeroCaso || !nombres || !apellidos || !campana || !correoPersonal || !correoJefe || !dispositivo) {
        alert("Por favor, complete todos los campos requeridos.");
        return false;
    }

    // Validación de correo electrónico
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(correoPersonal) || !emailRegex.test(correoJefe)) {
        alert("Por favor, ingrese una dirección de correo electrónico válida.");
        return false;
    }

    return true;
}

function validateSerialAndAsset() {
    const serialDispositivo = document.getElementById("serialDispositivo").value.trim();
    const activoDispositivo = document.getElementById("activoDispositivo").value.trim();
    const serialDiadema = document.getElementById("serialDiadema").value.trim();
    const serialMonitor = document.getElementById("serialMonitor").value.trim();
    const activoMonitor = document.getElementById("activoMonitor").value.trim();
    const serialMonitor2 = document.getElementById("serialMonitor2").value.trim();
    const activoMonitor2 = document.getElementById("activoMonitor2").value.trim();

    const serialRegex = /^[a-zA-Z0-9]+$/; // Regex para validar series
    const activoRegex = /^[a-zA-Z0-9]+$/; // Regex para validar activos

    if (serialDispositivo && !serialRegex.test(serialDispositivo)) {
        alert("El serial del dispositivo contiene caracteres no válidos.");
        return false;
    }

    if (activoDispositivo && !activoRegex.test(activoDispositivo)) {
        alert("El activo del dispositivo contiene caracteres no válidos.");
        return false;
    }

    // Validar otros campos de serie y activo de la misma manera

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
        // Función para cambiar el estado del checkbox al hacer clic en el label
        document.querySelectorAll('.checkbox-group label').forEach(function (label) {
            label.addEventListener('click', function () {
                var checkbox = this.previousElementSibling;
                checkbox.checked = !checkbox.checked;
            });
        });
    })
>>>>>>> 571fc03284cb6b5e766f2f0a6324776c594e8123
