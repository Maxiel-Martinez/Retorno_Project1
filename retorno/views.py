from django.http import HttpResponseRedirect, HttpResponse
from django.contrib import messages
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import login
from django.contrib.auth import logout
from django.contrib.auth import authenticate
from django.contrib import messages

def formulario_view(request):
    if request.method == 'POST':
        # Manejar la lógica del formulario enviado
        pass
    return render(request, 'formulario.html')