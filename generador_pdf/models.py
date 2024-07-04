from django.db import models
from django.core.validators import FileExtensionValidator

# Get an instance of a FileExtensionValidator
validate_pdf_extension = FileExtensionValidator(allowed_extensions=['pdf'])

class Proyecto(models.Model):
    # Define fields for your Proyecto model
    ...

class DevolucionEquipo(models.Model):
    nombre = models.CharField(max_length=150, null=False, blank=False)
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    diadema = models.BooleanField(default=False)
    camara = models.BooleanField(default=False)
    raton = models.BooleanField(default=False)
    teclado = models.BooleanField(default=False)
    pantallas = models.PositiveIntegerField(default=1)
    dispositivo_tipo = models.CharField(
        max_length=15,
        choices=[
            ('torre', 'Torre'),
            ('mini', 'Mini'),
            ('portatil', 'Portatil')
        ],
        default='torre'
    )
    correo_personal = models.EmailField(null=False, blank=False)
    correo_jefe = models.EmailField(null=False, blank=False)
    firma_empleado = models.FileField(upload_to='firmas/', validators=[validate_pdf_extension])
    firma_jefe = models.FileField(upload_to='firmas/', validators=[validate_pdf_extension])
    firma_rrhh = models.FileField(upload_to='firmas/', validators=[validate_pdf_extension])

    def __str__(self):
        return f"Devolución de equipo {self.nombre} para {self.proyecto}"