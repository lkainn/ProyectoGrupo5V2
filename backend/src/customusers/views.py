from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # Iniciar sesión al usuario después del registro
            login(request, user)
            return redirect('profile')  # Redirigir a la vista del perfil del usuario
    else:
        form = UserCreationForm()
    return render(request, 'customusers/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('profile')  # Redirigir a la vista del perfil del usuario
    else:
        form = AuthenticationForm()
    return render(request, 'customusers/login.html', {'form': form})

@login_required
def profile(request):
    user = request.user
    return render(request, 'customusers/profile.html', {'user': user})