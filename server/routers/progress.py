from fastapi import APIRouter

router = APIRouter()

@router.get("/progress")
async def get_progress():
    return {"message": "Progress endpoint works!"}
