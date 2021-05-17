from .models import User, Event, Performance
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, EventSerializer, PerformanceSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EventSerializer

class PerformanceViewSet(viewsets.ModelViewSet):
    queryset = Performance.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PerformanceSerializer
