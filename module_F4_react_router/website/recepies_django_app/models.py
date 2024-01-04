from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(max_length=32)
    slug = models.SlugField(blank=True)

    def __str__(self) -> str:
        return f'{self.name}'


class Recepy(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()
    category=models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f'{self.name}'
 