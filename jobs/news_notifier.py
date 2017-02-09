import requests

res = requests.post('http://main:5000/api/news/notify')
print(res);

