FROM python:3.9-alpine
COPY . .
RUN pip install -r requirements.txt

ENV SECRET_KEY=maybeshesbornwithit, MONGO_CONNECT=mongodb+srv://BART0321:tbGB7IuFWtZaYTO5@walk-with-medb.5ymqx.mongodb.net/vying-db?retryWrites=true&w=majority

CMD exec python3 manage.py runserver
