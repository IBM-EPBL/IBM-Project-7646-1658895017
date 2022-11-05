# FROM python
# WORKDIR /app
# ADD . /app
# RUN python3 -m pip install -r requirements.txt
# EXPOSE 5000
# CMD ["python3", "app.py"]

FROM python:3.10.7
RUN mkdir /app
WORKDIR /app
ADD  . /app
COPY . /app
RUN python3 -m pip install -r requirements.txt
EXPOSE 5000
CMD [ "python3", "./app.py" ]