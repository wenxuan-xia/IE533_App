from __future__ import unicode_literals

from django.db import models

# Create your models here.

class DataCollector(models.Model):
    Gender_Choices = (
        ('f', "female"),
        ('m', "male"),
    )

    Career_Choices = (
        ('t', "Technical"),
        ('n', "Non-Technical"),
    )

    Env_Choices = (
        ('q', "quiet"),
        ('n', "noisy"),
    )

    Age_Choices = (
        ('0', "<15"),
        ('1', "[15,30)"),
        ('3', "[30,45)"),
        ('4', "[45,60)"),
        ('6', ">60"),
    )

    Gender = models.CharField('gender', max_length=1, choices=Gender_Choices, default=Gender_Choices[0][0])
    Career = models.CharField('Career', max_length=1, choices=Career_Choices, default=Career_Choices[0][0])
    TestingEnv = models.CharField('Testing Environment', max_length=1, choices=Env_Choices, default=Env_Choices[0][0])
    Musician = models.BooleanField('Musician', default=False)
    Age = models.CharField('Age Range', max_length=1, choices=Age_Choices, default=Age_Choices[0][0])
    EstimateTime_15 = models.FloatField('Test-15s', default = 0.0)
    EstimateTime_30 = models.FloatField('Test-30s', default = 0.0)
    EstimateTime_60 = models.FloatField('Test-60s', default = 0.0)
    Error_15 = models.FloatField("Error_15s", default = 0.0)
    Error_30 = models.FloatField("Error_30s", default = 0.0)
    Error_60 = models.FloatField("Error_60s", default = 0.0)
