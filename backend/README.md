# Popcan Prototype Backend 

Prototype backend comprising a VirtualBox VM with a LAMP stack, Flask and RESTful Python API. Developed for the popcan project at the 2020 Pittsburgh Civic Hackathon. 

Popcan proposes to develop a mobile app that will let consumers get the recycling rules at their location for specific waste items by uploading a picture of the item. 

### Backend Components:
* VirtualBox VM managed by Vagrant. Built from the syone/lamp box v1.0.1 downloaded from HashiCorp Vagrant Cloud. Specs:
  * Ubuntu Server 18.04.1 LTS (Bionic Beaver) 64 bits
  * Apache 2.4.29
  * PHP 7.2.10
  * MySQL 5.7.24 (root/root)
  * VirtualBox Guest Additions 6.0.0
* RESTful API submits recycling image to 'Waste-Sorter' neural network classifier developed by Collin D. Ching.
* Classifier identifies the type of waste material (plastic, glass, etc.) and uses this information to query recycling rules in the recycling information database.
* Jsonified results are returned to the client.

### Features under development:
* Completion of API handlers for image file upload and location data
* Connection to front end and display of results to the user
* Sourcing of additional data sets to train classifier and/or identification of third-party prediction API for recycling

### How to Use:

* Install VirtualBox and Vagrant
* Launch box from folder containing `Vagrantfile` file using `vagrant up`
* Login from Terminal via SSH: `vagrant ssh`
* Install packages listed in local_installs.sh
* Switch to shared directory between VM and host system: `cd /vagrant`
* Set up MySQL database and load data
    - log in as root: mysql -u root -p
    - Enter password: root
    - mysql> CREATE DATABASE popcan;
    - mysql> source create_tables.sql;
    - logout: mysql> \q
* Run `python3 api_server.py` to launch Flask and API
* Once API is running, log in via a separate SSH connection and submit API request from the command line: curl http://127.0.0.1:5002/recycling. The API will select the most recently submitted image from the /images folder and send it to the classifier for processing.
* Results format: {"instructions": "Items must be clean, loose, and placed in a blue container.", "location": "Pittsburgh", "material": "paper", "recyclable": 1}
