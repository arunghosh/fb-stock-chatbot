from newspaper import Article
import requests
import json

url = "http://www.thehindubusinessline.com/economy/reforms-policy-effectiveness-to-decide-indias-rating-moodys/article9469912.ece?homepage=true"
article = Article(url)
article.download()
print(article.html)
# cnn_paper = newspaper.build('http://cnn.com')
# article = cnn_paper.articles[0]
article.parse()
article.nlp()

data = {
    'summary': article.summary,
    'keywords': article.keywords,
    'image': article.top_image,
    'url': article.url,
    'title': article.title
}
print(data)
res = requests.post('http://localhost:5000/api/news/', data, headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"})
print(res);
