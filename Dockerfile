FROM python:3.11

RUN pip install fastapi &&\
    pip install "uvicorn[standard]" &&\
    pip install python-multipart &&\
    pip install openai

WORKDIR /app

CMD ["uvicorn",  "main:app",  "--reload"]

