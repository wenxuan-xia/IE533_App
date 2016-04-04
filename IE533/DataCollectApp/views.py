from django.shortcuts import render
from models import DataCollector
# Create your views here.

def mainView(request):
    return render(request, "mainView.html")


def submit(request):
    dataCollector = DataCollector()
    if request.method == "POST":
        dataCollector.Gender = request.POST.get('gender', '')
        dataCollector.Age = request.POST.get('age', '')
        dataCollector.Career = request.POST.get('career', '')
        dataCollector.testenv = request.POST.get('testenv', '')
        if request.POST.get('musician', '') =="true":
            dataCollector.Musician = True
        else:
            dataCollector.Musician = False

        dataCollector.EstimateTime_15 = float(request.POST.get('s15', ''))
        dataCollector.EstimateTime_30 = float(request.POST.get('s30', ''))
        dataCollector.EstimateTime_60 = float(request.POST.get('s60', ''))
        dataCollector.Error_15 = abs(dataCollector.EstimateTime_15 - 15.0)/15
        dataCollector.Error_30 = abs(dataCollector.EstimateTime_30 - 30.0)/30
        dataCollector.Error_60 = abs(dataCollector.EstimateTime_60 - 60.0)/60
        dataCollector.save()

    return render(request, "submit.html")
