from sqlalchemy.orm import Session
from fastapi import Depends
from database.config import get_db
from models.cultivator import CultivatorSchema
from fastapi import APIRouter

from database.cultivator import(
    get_cultivator,
    get_cultivators,
    add_cultivator,
    delete_cultivator,
    update_cultivator,
    cultivator_helper
)

router = APIRouter()

@router.get("/",response_description="Data retrieved from the database")
def retrieve_cultivators(db:Session = Depends(get_db)):
    cultivators = get_cultivators(db)
    if cultivators:
        return [cultivator_helper(fc) for fc in cultivators]
    return "empty list returned"

@router.get("/{id}",response_description="Data retrieved from the database")
def retrieve_cultivator(id:int,db:Session = Depends(get_db)):
    cultivator = get_cultivator(db,id)
    if cultivator:
        return cultivator_helper(cultivator)
    return "empty list returned"

@router.post("/",response_description="data added to database")
def add_cultivator_data(data:CultivatorSchema,db:Session = Depends(get_db)):
    added = add_cultivator(db,data.dict())
    if added:
        return cultivator_helper(added)
    return "Failed to add data to the database"


