FROM python:3.6

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /app/requirements.txt

WORKDIR /butler

COPY . /butler

RUN pip install -r requirements.txt -e .

CMD butler-develop
