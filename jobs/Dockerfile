from python:latest
# RUN groupadd -r reader && useradd -r -g reader reader
RUN pip install requests==2.5.1 feedparser==5.2.1
RUN apt-get update && apt-get -y install cron
WORKDIR /app
COPY . /app
# USER reader
# Add crontab file in the cron directory
ADD crontab /etc/cron.d/hello-cron

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/hello-cron

# Create the log file to be able to run tail
RUN touch /var/log/cron.log

# Run the command on container startup
CMD cron && tail -f /var/log/cron.log
