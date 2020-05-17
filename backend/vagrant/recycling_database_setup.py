import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
 
Base = declarative_base()
 
class Recycling(Base):
    __tablename__ = 'recycling'
   
    recycling_id = Column(Integer, primary_key=True)
    material_id = Column(Integer)
    location_id = Column(Integer)
    recyclable = Column(Integer)
    instructions = Column(String)
 
class Location(Base):
    __tablename__ = 'location'

    location_id = Column(Integer, primary_key=True)
    location_name = Column(String)

class Material(Base):
    __tablename__ = 'material'

    material_id = Column(Integer, primary_key=True)
    material_name = Column(String)
    

#We added this serialize function to be able to send JSON objects in a serializable format
    @property
    def serialize(self):
       
       return {
           'name'         : self.name,
           'description'         : self.description,
           'id'         : self.id,
           'price'         : self.price,
           'course'         : self.course,
       }
 

engine = create_engine('mysql://root:root@localhost/popcan')
 

Base.metadata.create_all(engine)
