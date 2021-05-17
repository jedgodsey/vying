from rest_framework import serializers
from .models import Profile, Event, Performance

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profilefields = '__all__'

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eventfields = '__all__'

class PerformanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Performancefields = '__all__'
