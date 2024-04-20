import json
import requests


headers = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiY2U2YTEyMWQtYzU0Mi00YjE0LWJhNjktZmZlNDk3ZGM1MjdjIiwidHlwZSI6ImFwaV90b2tlbiJ9.79noqB3miYCdBK2xNz5CBQ75Hc2y6nN2omM1p9nDvQ4"}

url = "https://api.edenai.run/v2/image/generation"
payload = {
    "providers": "openai",
    "text": "this is a test of Eden AI",
    "resolution": "512x512",
    "fallback_providers": ""
}

response = requests.post(url, json=payload, headers=headers)
result = json.loads(response.text)
print(result['openai']['items'])
