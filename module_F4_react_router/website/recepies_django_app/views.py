from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status


def test_view(request):
    return render(request, 'recepies_django_app/index.html')


@api_view(["GET",])
def recepies_list(request, slug):
    django_list_data = Recepy.objects.filter(category__slug=slug)
    serializer_data = RecepySerializer(django_list_data, many=True)
    return Response(serializer_data.data, status.HTTP_200_OK)


@api_view(["GET",])
def category_all(request):
    django_list_data = Recepy.objects.all()
    serializer_data = RecepySerializer(django_list_data, many=True)
    return Response(serializer_data.data, status.HTTP_200_OK)


@api_view(["GET",])
def category_list(request):
    django_list_data = Category.objects.all()
    serializer_data = CategorySerializer(django_list_data, many=True)
    return Response(serializer_data.data, status.HTTP_200_OK)


@api_view(["GET",])
def recepy_view(request, pk):
    django_list_data = Recepy.objects.get(pk=pk)
    serializer_data = RecepySerializer(django_list_data, many=False)
    return Response(serializer_data.data, status.HTTP_200_OK)
