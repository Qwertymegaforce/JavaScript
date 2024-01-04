from django.urls import path
from .views import *


urlpatterns = [
    path('', test_view),
    path('api/category/', category_all),
    path('api/category/<slug:slug>', recepies_list),
    path('api/recepy/<int:pk>', recepy_view),
    path('api/getcategory', category_list)
]
