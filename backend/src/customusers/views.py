from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm


from django.contrib.auth import authenticate, login
from django.contrib import messages



def signup(request):
    # if request.method == 'POST':
     #   form = UserCreationForm(request.POST)
      #  if form.is_valid():
       #     user = form.save()
            # Iniciar sesión al usuario después del registro
        #    login(request, user)
         #   return redirect('profile')  # Redirigir a la vista del perfil del usuario
   # else:
    #    form = UserCreationForm()
   # return render(request, 'customusers/signup.html', {'form': form})

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, '¡Registro exitoso!')
            return redirect('profile')  # Cambia 'profile' al nombre de tu vista de perfil
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
   # if request.method == 'POST':
    #    form = AuthenticationForm(request, data=request.POST)
     #   if form.is_valid():
      #      user = form.get_user()
       #     login(request, user)
        #    return redirect('profile')  # Redirigir a la vista del perfil del usuario
   # else:
    #    form = AuthenticationForm()
   # return render(request, 'customusers/login.html', {'form': form})

     if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('profile')  # Cambia 'profile' al nombre de tu vista de perfil
        else:
            messages.error(request, 'Nombre de usuario o contraseña incorrectos.')
            return render(request, 'login.html')  # Renderiza el formulario de inicio de sesión con el mensaje de error
     else:
        return render(request, 'login.html')  # Renderiza el formulario de inicio de sesión en caso de solicitud GET


@login_required
def profile(request):
    user = request.user
    return render(request, 'customusers/profile.html', {'user': user})