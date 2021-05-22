from django.db import models
from django.utils.translation import gettext
import datetime

class Profile(models.Model):
    name = models.CharField(max_length = 100)
    birthdate = models.DateField()
    sex = models.CharField(max_length = 6, choices = [('M', 'Male'), ('F', 'Female')], default = 'F')
    email = models.EmailField(max_length = 50)
    image = models.URLField(default='https://w7.pngwing.com/pngs/470/271/png-transparent-purple-dinosaur-character-dino-fred-flintstone-wilma-flintstone-barney-rubble-betty-rubble-flintstones-miscellaneous-photography-fictional-character.png')
    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length = 150)
    description = models.TextField(max_length = 2000)
    creator = models.ForeignKey(Profile, on_delete = models.CASCADE)
    measurement = models.CharField(max_length=6, choices=[('Time', 'Time'),('Number', 'Number')])
    performance_direction = models.CharField(max_length=4, choices=[('High', 'High'),('Low','Low')])
    def __str__(self):
        return self.title

class Performance(models.Model):
    date = models.DateField(gettext("Date"), default=datetime.date.today)
    event = models.ForeignKey(Event, on_delete = models.CASCADE)
    competitor = models.ForeignKey(Profile, on_delete = models.CASCADE)
    time_performance = models.DurationField(null=True)
    float_performance = models.DecimalField(max_digits=15, decimal_places=2, null=True)
    def __str__(self):
        return self.competitor
