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
