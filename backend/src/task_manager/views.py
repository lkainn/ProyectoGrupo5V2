from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView


class TaskListView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtrar tareas por el usuario actual
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Asignar el usuario actual al crear la tarea
        serializer.save(user=self.request.user)


class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return JsonResponse({'message': 'Registro exitoso'})
        else:
            return Response(form.errors, status=400)

@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({'message': 'Inicio de sesión exitoso', 'token': token.key, 'username': user.username}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Credenciales incorrectas'}, status=status.HTTP_400_BAD_REQUEST)