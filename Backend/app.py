from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# origins = [
# "http://localhost:3000",
# "http://localhost:8000",
# ]

app = FastAPI()


# app.add_middleware(
# CORSMiddleware,
# allow_origins=["*"],
# allow_credentials=True,
# allow_methods=["*"],  
# allow_headers=["*"],  
# )



@app.get("/",tags=["Root"])
def read_route():
    return {"Welcome":"Deepak!"}