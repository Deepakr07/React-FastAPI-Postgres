from database.config import Base
from pydantic import BaseModel
from sqlalchemy import String, Boolean, ForeignKey, Integer, Column,DateTime
from datetime import datetime
from typing import Optional

class CultivatorSchema(Base):
    __tablename__ = "cultivator"
    id = Column(Integer, primary_key=True, autoincrement = True)
    company_id = Column(Integer, ForeignKey("farmer_company.id"))
    name = Column(String, nullable = False)
    active = Column(Boolean, nullable = False)
    created_at = Column(DateTime)
    updated_at = Column(DateTime)

class Cultivator(BaseModel):
    company_id:int
    name:str
    active:bool
    created_at:datetime
    created_by:str
    updated_at:datetime
    class Config:
        orm_mode = True

class UpdateCultivator(BaseModel):
    company_id:Optional[int]
    name:Optional[str]
    active:Optional[bool]
    created_at:Optional[datetime]
    created_by:Optional[str]
    updated_at:datetime
    updated_by:str
    class Config:
        orm_mode = True
