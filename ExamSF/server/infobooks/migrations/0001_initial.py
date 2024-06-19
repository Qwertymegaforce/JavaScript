# Generated by Django 5.0.4 on 2024-05-27 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InfoBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=32, unique=True)),
                ('text', models.TextField(blank=True)),
                ('type', models.CharField(blank=True, choices=[('model', 'model'), ('engine', 'engine'), ('transmission', 'transmission'), ('bridge_design', 'bridge_design'), ('bridge_pattern', 'bridge_pattern'), ('technical_inspection', 'technical_inspection'), ('node', 'node'), ('repair_method', 'repair_method')], max_length=24)),
            ],
        ),
    ]
