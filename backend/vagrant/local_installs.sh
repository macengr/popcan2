#!/bin/bash

sudo apt update
sudo apt install python3-pip
pip3 install --upgrade pip
pip3 install flask packaging oauth2client redis passlib flask-httpauth flask-restful flask-jsonpify
pip3 install sqlalchemy flask-sqlalchemy psycopg2-binary bleach requests
pip3 install numpy pandas
sudo apt-get install libmysqlclient-dev
sudo apt install -y libsm6 libxext6
sudo apt install libxrender1
pip3 install mysqlclient opencv-python
pip3 install fastai --no-cache-dir
