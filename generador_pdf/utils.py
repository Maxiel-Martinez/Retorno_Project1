import pdfkit

def generar_pdf(html):
    opciones = {
        'page-size': 'Letter',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
    }
    ruta_pdf = 'formulario.pdf'
    pdfkit.from_string(html, ruta_pdf, options=opciones)
    return ruta_pdf