from django.shortcuts import render
from django.views.generic.base import TemplateView


class ListView(TemplateView):
    template_name = "pages/blog.html"



# Create your views here.
