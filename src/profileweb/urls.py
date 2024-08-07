from django.conf import settings
from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('blog/',include(('blog.urls','blog'),namespace='blog')),
    path('en/',views.enHome, name='enHome'),
    path('',views.home, name='home'),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
