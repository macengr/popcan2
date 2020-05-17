from fastai.vision import *

path_to_model = "./classifier"
learn = load_learner(path_to_model)
categories = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']
img = open_image('images/glass172.jpg')
pred = to_np(learn.predict(img)[0])
prediction = categories[pred]
print("The image is " + prediction)
