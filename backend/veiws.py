from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import torch
from .ml_model.model import predict  # Import predict function from model.py

@api_view(['POST'])
def check_news(request):
    text = request.data.get('article')
    prediction = predict(text)
    confidence = prediction['confidence']
    label = 'REAL' if prediction['label'] == 1 else 'FAKE'
    return Response({'prediction': label, 'confidence': confidence})

@api_view(['POST'])
def analyze_tweets(request):
    username = request.data.get('username')
    # Placeholder: Implement Twitter API logic here to fetch tweets
    # For now, return dummy response
    return Response({'username': username, 'fake_news_percentage': 0.75})

"""Explanation: This file contains the view functions that handle incoming requests to the API. The check_news function processes an article and uses the prediction model, while analyze_tweets is a placeholder for analyzing a user's tweets"""