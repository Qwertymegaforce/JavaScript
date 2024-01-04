from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:    
        model = Category
        fields = ('id', 'name', 'slug')


class RecepySerializer(serializers.ModelSerializer):
    class Meta:    
        model = Recepy
        fields = ('id', 'name', 'description', 'category')
        