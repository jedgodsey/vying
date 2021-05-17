from .models import Profile, Event, Performance
from rest_framework import viewsets, permissions
from .serializers import ProfileSerializer, EventSerializer, PerformanceSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProfileSerializer

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
