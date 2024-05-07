window.addEventListener('DOMContentLoaded', function() {
    const dispositivoSelect = document.getElementById('dispositivo');
    const camposPortatil = document.getElementById('campos-portatil');
    const camposEscritorio = document.getElementById('campos-escritorio');
    const serialDiadema = document.getElementById('serial-diadema');
    const diademaInput = document.getElementById('diadema');

    dispositivoSelect.addEventListener('change', function() {
        if (this.value === 'portatil') {
            camposPortatil.style.display = 'flex';
            camposEscritorio.style.display = 'none';
        } else {
            camposPortatil.style.display = 'none';
            camposEscritorio.style.display = 'flex';
        }
    });

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