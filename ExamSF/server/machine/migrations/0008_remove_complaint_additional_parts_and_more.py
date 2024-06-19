# Generated by Django 5.0.4 on 2024-06-04 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('machine', '0007_alter_machine_ship_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='complaint',
            name='additional_parts',
        ),
        migrations.AddField(
            model_name='complaint',
            name='repair_date',
            field=models.DateTimeField(blank=True, default='2022-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='complaint',
            name='spare_parts',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='complaint',
            name='wasted_time',
            field=models.DurationField(blank=True),
        ),
    ]