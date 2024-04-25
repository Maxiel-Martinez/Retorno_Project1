from django.urls import path, include

urlpatterns = [
    # ... tus otras URLs aquí ...
    path('users/', include('users.urls')),
]
