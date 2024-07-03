import pdfkit

def generar_pdf(html):
    options = {
        'page-size': 'Letter',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
    }
    ruta_pdf = 'formulario.pdf'
    pdfkit.from_string(html, ruta_pdf, options=options)
    return ruta_pdf