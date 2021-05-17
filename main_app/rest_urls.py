from django.urls import path
from rest_framework import routers
from .viewsets import UserViewSet, EventViewSet, PerformanceViewSet

router = routers.DefaultRouter()

router.register('users', UserViewSet, 'users') #do I need this?
router.register('events', EventViewSet, 'events')
router.register('performances', PerformanceViewSet, 'performances')

urlpatterns = router.urls
