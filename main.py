from typing import Union

from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

import os
import openai
import shutil

app = FastAPI()

origins = [ "http://localhost",
            "http://localhost:3000",
            "http://localhost:8000"]
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/video-metadata")
def get_metadata(): 

    with open('sub.srt', 'r') as f:
        contents = f.read()
        text = "Summarize this for a second-grade student:\n\n1\n" + contents

        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=text,
            temperature=0.7,
            max_tokens=256,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
            )   

        if len(response.choices) > 0:

            summary = response.choices[0].text
            response = openai.Completion.create(
                model="text-davinci-003",
                prompt="Extract keywords from this text:\n\n"+ summary,
                temperature=0.5,
                max_tokens=60,
                top_p=1,
                frequency_penalty=0.8,
                presence_penalty=0
                )
            return {"summary" :summary, "keywords" : response.choices[0].text.replace("\n\n-", "").split("\n-")}
        else:
            return {"summary" :"Analysis impossible", "keywords" : ""}                           

@app.post("/subtitles")
async def post_sub_file(file: UploadFile):
    with open("sub.srt", "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return 1
    
        