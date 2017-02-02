import newspaper
from newspaper import Article
import requests
import json

def add_article(article):
    print('parsing ' + article.url)
    article.download()
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

# url = "http://www.thehindubusinessline.com/economy/reforms-policy-effectiveness-to-decide-indias-rating-moodys/article9469912.ece?homepage=true"
# article = Article(url)
cnn_paper = newspaper.build('http://cio.economictimes.indiatimes.com/')
print("get ctgrs")
for category in cnn_paper.category_urls():
    print(category)
print('********')
for a in cnn_paper.articles[:2]:
    add_article(a);

