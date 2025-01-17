from models.farmer_company import FarmerCompany
from sqlalchemy.orm import Session

def farmer_company_helper(farmerData:FarmerCompany) -> dict:
    return {
        "id":farmerData.id,
        "name":farmerData.name,
        "code":farmerData.code,
        "active":farmerData.active,
        "created_at": farmerData.created_at,
        "created_by": farmerData.created_by,
        "updated_at": farmerData.updated_at,
        "updated_by":  farmerData.updated_by,
    }


def getFarmerCompanyData(db:Session) ->FarmerCompany:
    farmerData = db.query(FarmerCompany).all()
    return farmerData
    
def addFarmerCompanyData(companyData:dict,db:Session)->FarmerCompany:
    try:
        new_data = FarmerCompany(**companyData)   
        db.add(new_data)
        db.commit()
        db.refresh(new_data)
        return new_data
    except:
        return "Something Went wrong.. Unable to add data to the database"