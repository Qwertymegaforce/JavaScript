# Generated by Django 5.0.4 on 2024-06-19 07:33

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machine', '0009_alter_complaint_repair_date_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='complaint',
            name='service_company',
            field=models.ForeignKey(default='Данные более недоступны', on_delete=django.db.models.deletion.SET_DEFAULT, related_name='complaint_service', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='machine',
            name='service_company',
            field=models.ForeignKey(default='Данные более недоступны', on_delete=django.db.models.deletion.SET_DEFAULT, related_name='service', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='service',
            name='service_company',
            field=models.ForeignKey(default='Данные более недоступны', on_delete=django.db.models.deletion.SET_DEFAULT, related_name='service_service', to=settings.AUTH_USER_MODEL),
        ),
    ]