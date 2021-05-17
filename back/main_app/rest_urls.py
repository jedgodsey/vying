from django.urls import path
from rest_framework import routers
from .viewsets import ProfileViewSet, EventViewSet, PerformanceViewSet

router = routers.DefaultRouter()

router.register('profiles', ProfileViewSet, 'profiles') #do I need this?
router.register('events', EventViewSet, 'events')
router.register('performances', PerformanceViewSet, 'performances')

urlpatterns = router.urls
