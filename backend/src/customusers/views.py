from rest_framework import generics, status
from rest_framework.response import Response
from .models import Registry
from .serializers import RegistrySerializer

class RegistryCreateView(generics.CreateAPIView):
    queryset = Registry.objects.all()
    serializer_class = RegistrySerializer

    def create(self, request, *args, **kwargs):
        # Llamar al método create de la superclase para realizar la creación
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # respuesta en caso de exito
        headers = self.get_success_headers(serializer.data)
        response_data = {
            "success": True,
            "message": "Registro exitoso",
            "data": serializer.data,
        }
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)
