from database.farmer_company import farmer_company_helper,getFarmerCompanyData
from sqlalchemy.orm import Session
from database.config import get_db
from fastapi import APIRouter,Depends


router = APIRouter()

@router.get("/",response_description="Data retrieved")
def get_farmer_companies(db:Session = Depends(get_db)):
    farmer_companies = getFarmerCompanyData(db)
    if farmer_companies:
        return [farmer_company_helper(fc) for fc in farmer_companies]