# Building a Basic Restful API in Python (https://www.codementor.io/@sagaragarwal94/building-a-basic-restful-api-in-python-58k02xsiq)
# https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/

from flask import Flask, request
from flask_restful import Resource, Api, reqparse
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from recycling_database_setup import Base, Recycling, Location, Material
from json import dumps
from flask_jsonpify import jsonify
from fastai.vision import *
import glob
import os
import cv2
import werkzeug

# specify upload folder for images
UPLOAD_FOLDER = './images'
ALLOWED_EXTENSIONS = {'jpg'}

app = Flask(__name__)
api = Api(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Initiate an ORM session
engine = create_engine('mysql://root:root@localhost/popcan')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()


class PredictAPI(Resource):
    def allowed_file(filename):
        return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

    def predict_material():
        '''Submit latest posted image to ML classifier. Return predicted 
           material type.'''
        path_to_model = "./classifier"
        learn = load_learner(path_to_model)
        list_of_files = glob.glob('./images/*.jpg')
        print('list of images = ' + str(list_of_files))
        image = max(list_of_files, key=os.path.getctime)
        #item_image = cv2.imread(max(list_of_files, key=os.path.getctime))
        img = open_image(image)
        pred = to_np(learn.predict(img)[0])
        return pred

class RecyclingInfo(Resource):
    def get(self, session=session, location='Pittsburgh'):
        '''Query database for recycling instructions based on location 
           and material.''' 
        material = PredictAPI.predict_material()
        print('material is ' + str(material))
        result = session.query(Recycling.recyclable, Recycling.instructions,\
                               Location.location_name, Material.material_name)\
                       .filter(Recycling.location_id==Location.location_id)\
                       .filter(Recycling.material_id==Material.material_id)\
                       .filter(Location.location_name==location)\
                       .filter(Material.material_id==material)\
                       .one()
        print(result)
        fields = ['recyclable', 'instructions', 'location', 'material']
        out_dict = {fields[key]:result[key] for key in range(len(result))}
        print(out_dict)
        return jsonify(out_dict)

api.add_resource(RecyclingInfo, '/', '/recycling')



if __name__ == '__main__':
        app.run(debug=True, port='5002')
