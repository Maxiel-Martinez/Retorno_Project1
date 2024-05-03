# usuarios/views.py
from django.shortcuts import render
from .forms import TuFormulario
from pdf.utils import generar_pdf

def procesar_formulario(request):
    if request.method == 'POST':
        formulario = TuFormulario(request.POST, request.FILES)
        if formulario.is_valid():
            # Procesar los datos del formulario válido
            datos_formulario = formulario.cleaned_data

            # Renderizar el formulario como HTML
            html = render_to_string('usuarios/formulario.html', datos_formulario)

            # Generar el PDF
            ruta_pdf = generar_pdf(html)

            # Enviar el PDF como respuesta o realizar otras acciones
            # ...

            # Guardar los datos del formulario en la base de datos u otras acciones
            formulario.save()
    else:
        formulario = TuFormulario()

    # Renderizar la plantilla del formulario
    return render(request, 'templates/formulario.html', {'formulario': formulario})