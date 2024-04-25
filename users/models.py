from django.db import models

# Create your models here.
from django.db import models

class User(models.Model):
    nombre = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    correo = models.EmailField(unique=True)
    cedula = models.CharField(max_length=20, unique=True)
    firma = models.ImageField(upload_to='firmas/', null=True, blank=True)
