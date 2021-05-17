FROM python:3.8-slim
COPY . .

RUN pip install -r requirements.txt


CMD exec gunicorn vying_app.wsgi:application
