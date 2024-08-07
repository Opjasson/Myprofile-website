from django.shortcuts import render

def enHome(request):
    return render(request,'pages/enHome.html', {})

def home(request):
    return render(request,'pages/home.html', {})