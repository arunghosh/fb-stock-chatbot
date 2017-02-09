from html.parser import HTMLParser
import feedparser
import requests

class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

def add_article(article):

    data = {
        'summary': strip_tags(article.summary),
        # 'keywords': '',
        # 'image': article.top_image,
        'url': article.link,
        'title': article.title
    }
    print(data)
    res = requests.post('http://main:5000/api/news/', data, headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"})
    print(res);


feed = feedparser.parse("http://timesofindia.indiatimes.com/rssfeeds/1898055.cms")
for article in feed['entries']:
    add_article(article)
