from fastapi import FastAPI, Request


app = FastAPI()

@app.get("/ping")
def ping():
    return {"message": "pong"}

@app.post("/ping")
async def ping(request: Request):
    data = await request.json()
    return {"message": "pong", "input": data}