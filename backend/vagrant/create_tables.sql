-- Create MySQL tables
USE popcan;

CREATE TABLE IF NOT EXISTS location (location_id int PRIMARY KEY, location_name text);
CREATE TABLE IF NOT EXISTS material (material_id int PRIMARY KEY, material_name text);
CREATE TABLE IF NOT EXISTS recycling (recycling_id int auto_increment PRIMARY KEY, material_id int, location_id int, recyclable tinyint(1), instructions text);


load data local infile './data/location.csv' into table location fields terminated BY ',' ENCLOSED BY '"' lines terminated BY '\n' (location_id, location_name);

load data local infile './data/material.csv' into table material fields terminated BY ',' ENCLOSED BY '"' lines terminated BY '\n' (material_id, material_name);

load data local infile './data/recycling.csv' into table recycling fields terminated BY ',' ENCLOSED BY '"' lines terminated BY '\n' (material_id, location_id, recyclable, instructions);



