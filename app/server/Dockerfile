FROM python:3.6

# We copy just the requirements.txt first to leverage Docker cache

WORKDIR /app

COPY ./setup.py /app
COPY ./requirements.txt /app/requirements.txt

COPY ./app/server /app/app/server

RUN pip install -r requirements.txt -e .

CMD butler-develop
