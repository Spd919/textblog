from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=50)
    article = models.TextField()
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
