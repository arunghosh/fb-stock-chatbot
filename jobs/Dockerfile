from python:latest
RUN groupadd -r reader && useradd -r -g reader reader
RUN pip install requests==2.5.1 feedparser==5.2.1
WORKDIR /app
COPY . /app
USER reader
CMD ["python", "news_notifier.py"]
