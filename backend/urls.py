from django.urls import path
from .views import check_news, analyze_tweets

urlpatterns = [
    path('api/check-news/', check_news, name='check_news'),
    path('api/analyze-tweets/', analyze_tweets, name='analyze_tweets'),
]

"""Explanation: This file defines the URL patterns for your API endpoints. It maps the URLs to their corresponding view functions."""