from rest_framework import serializers
from .models import User, Event, Performance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userfields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eventfields = '__all__'

class PerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Performancefields = '__all__'
