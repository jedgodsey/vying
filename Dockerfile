FROM python:3.9-alpine
COPY . .
RUN pip install -r requirements.txt


CMD exec python3 manage.py runserver
