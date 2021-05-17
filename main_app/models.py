from django.db import models
from django.utils.translation import gettext
import datetime

class Profile(models.Model):
    name = models.CharField(max_length = 100)
    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length = 150)
    description = models.TextField(max_length = 2000)
    def __str__(self):
        return self.title

class Performance(models.Model):
    date = models.DateField(gettext("Date"), default=datetime.date.today)
    event = models.ForeignKey(Event, on_delete = models.CASCADE)
    competitor = models.ForeignKey(Profile, on_delete = models.CASCADE)
    def __str__(self):
        return self.competitor
