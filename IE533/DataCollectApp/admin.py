from django.contrib import admin
from .models import DataCollector
# Register your models here.

class DataCollectorAdmin(admin.ModelAdmin):
    list_display = ["Gender", "Career", "TestingEnv", "Musician", "Age", "EstimateTime_15", "EstimateTime_30", "EstimateTime_60", "Error_15", "Error_30", "Error_60"]


admin.site.register(DataCollector, DataCollectorAdmin)
