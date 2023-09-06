import backend.models
import backend.utility_file
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pdfbook',
            name='description',
            field=models.CharField(blank=True, max_length=5000),
        ),
        migrations.AlterField(
            model_name='pdfbook',
            name='author_name',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='pdfbook',
            name='file',
            field=models.FileField(blank=True, upload_to=backend.models.PDFBook.store_file_path, validators=[backend.utility_file.validate_pdf_extension]),
        ),
        migrations.AlterField(
            model_name='pdfbook',
            name='image',
            field=models.ImageField(blank=True, upload_to=backend.models.PDFBook.store_file_path, validators=[backend.utility_file.validate_image_extension]),
        ),
        migrations.AlterField(
            model_name='pdfbook',
            name='title',
            field=models.CharField(blank=True, max_length=1500, unique=True),
        ),
        migrations.CreateModel(
            name='ProfileImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to=backend.models.ProfileImage.store_profile_path, validators=[backend.utility_file.validate_image_extension])),
                ('image_created', models.DateTimeField(auto_now_add=True)),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
