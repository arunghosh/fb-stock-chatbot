import json
import requests
import time

COMPANIES = [
        ('INFY', 'Infosys'),
        ('TCS', 'Tata Consultancy Service'),
        # ('TATAMOTORS', 'Tata Motors Limited'),
        # ('TATAMTRDVR', 'Tata Motors Limited'),
        # ('TATAPOWER', 'Tata Motors Limited'),
        # ('TATASPONGE', 'Tata Motors Limited'),
        ('TATASTEEL', 'Tata Motors Limited'),]


class GoogleFinanceAPI:
    def __init__(self):
        self.prefix = "http://finance.google.com/finance/info?client=ig&q="

    def get(self,symbol,exchange):
        url = self.prefix+"%s:%s"%(exchange,symbol)
        u = requests.get(url)
        obj = json.loads(u.text[3:])
        return obj[0]


if __name__ == "__main__":
    c = GoogleFinanceAPI()

    for code, name in COMPANIES:
        quote = c.get(code ,"NSE")
        data = {
            'code': code,
            'name': name,
            'value': quote['l']
        }
        print(quote)
        res = requests.post('http://localhost:5000/api/stock/', data, headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"})
        print(res);

