from database.config import Base
from pydantic import BaseModel
from sqlalchemy import String, Boolean, ForeignKey, Integer, Column,DateTime
from datetime import datetime
from typing import Optional

class FarmerCompanySchema(Base):
    __tablename__ = "cultivator"
    id = Column(Integer, primary_key=True, autoincrement = True)
    name = Column(String, nullable = False)
    code = Column(Integer,nullable=False)
    active = Column(Boolean, nullable = False)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    created_by = Column(String,nullable=False)
    updated_by = Column(String,nullable=False)

class FarmerCompany(BaseModel):
    name:str
    code:int
    active:bool
    created_at:datetime
    created_by:str
    updated_at:datetime 
    created_by = Column(String,nullable=False)
    updated_by = Column(String,nullable=False)
    class Config:
        orm_mode = True

class UpdateFarmerCompany(BaseModel):
    company_id:Optional[int]
    name:Optional[str]
    active:Optional[bool]
    created_at:Optional[datetime]
    created_by:Optional[str]
    updated_at:datetime
    updated_by:str
    class Config:
        orm_mode = True
