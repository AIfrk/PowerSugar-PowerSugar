
'''
nocode.ai - backend
-------------------
Bringing the power of scikit-learn, tensorflow and lime to the common man.

A GUI-based framework for creating, deploying and understanding machine and deep learning algorithms.
'''

# Standard libraries
import os
import json
import pickle
import sys
import importlib
import csv
import weakref
from os import remove
from pprint import pprint

# Libraries to handle data
import numpy
import pickle
import pandas as pd
import numpy as np
from sklearn.cross_validation import train_test_split

# Libraries for deep learning
import keras
import tensorflow

# Web Server libraries
from flask import Flask
from flask import request
from flask_cors import CORS
from flask import Response
from flask import send_file
from werkzeug.utils import secure_filename

# Libraries for device information
import GPUtil
import psutil
from tensorflow.python.client import device_lib


# Metric libraries
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.metrics import average_precision_score
from sklearn.metrics import precision_recall_curve
from sklearn.metrics import roc_curve
from sklearn.metrics import auc

# Plotting libraries
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('Agg')

# Interpretability library
import lime.lime_tabular as lt

# Libraries to generate pdfs
import pdfkit
from PyPDF2 import PdfFileMerger

# Custom functions and classes
from data_extraction import CSV, RawFile
from globals import ABSOLUTE_PATH, UPLOAD_FOLDER, ALLOWED_EXTENSIONS, allowed_file, PREPROC, SUPER, UNSUPER, json_decoder, json_encoder, weakdict, str_isfloat
from notebook_handler import ACTIVE_NOTEBOOKS, create_notebook_global_table, get_notebook_data, notebook_global_table_exist, set_notebook_data
from usertable_handler import create_new_user_table, user_table_exists
from keras_callbacks import on_epoch_end_callback

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# To interact with vue.js
CORS(app)

'''
Route functions used by login page
- Form that accepts username and password
'''

# a username is checked initially before submitting the form
# once form is submitted that username is guaranteed to exist, need to check if password matches

@app.route("/check_username_exists/<check_username_exists_json>", methods = ["GET"])
def check_username_exists(check_username_exists_json):
	try:
		check_username_exists_dict = json_decoder.decode(check_username_exists_json)
		
		# if new installation, create new user table

		if not (user_table_exists()):
			create_new_user_table()

		# check user table is username exists

		fileObject = open("USERTABLE", "rb")
		table = pickle.load(fileObject)

		if any(obj['username'] == check_username_exists_dict['username'] for obj in table):
			return json_encoder.encode({"message":"Success", "comment":"Username exists"})

		return json_encoder.encode({"message":"Success", "comment": "Username available"})

	except:
		return json_encoder.encode({"message":"Failure", "comment": "Other error"})

@app.route("/check_username_and_password_matches", methods = ["POST"])
def check_username_and_password_matches():
	try:

		# if new installation, create a new user table
		if not (user_table_exists()):
			create_new_user_table()

		# extract from POST request form data wrapped in json

		username = request.json['username']
		password = request.json['password']

		# open user table and check if username and password match.

		fileObject = open("USERTABLE", "rb")
		table = pickle.load(fileObject)

		if (any(username == obj['username'] and password == obj['password'] for obj in table)):
			return json_encoder.encode({"message":"Success", "comment":"Username and password match"})

		return json_encoder.encode({"message":"Success", "comment":"Username and password does not match"})
	except:
		return json_encoder.encode({"message":"Failure", "comment": "Other error"})

'''
Route functions used by register page
- Form to create a new user
'''

@app.route("/add_user", methods = ["POST"])
def add_user():
	try:
		user = request.json
		
		# if new installation, create a new user table

		if not (user_table_exists()):
			create_new_user_table()

		fileObject = open("USERTABLE", "rb")
		table = pickle.load(fileObject)
		fileObject.close()

		# newly created user does not have any notebooks

		obj = 	{
					"username": user['username'],
					"password": user['password'],
					"created_notebooks": [],
					"shared_notebooks": []
				}
		
		table.append(obj)

		# save updated user table

		fileObject = open("USERTABLE", "wb")
		pickle.dump(table, fileObject)
		fileObject.close()

		return json_encoder.encode({"message":"success"})
	except:
		return json_encoder.encode({"message":"failure"})

'''
Route functions used by dashboard
- Creates new notebooks
- Can display and load existing notebooks
'''

@app.route("/check_notebook_name_exists/<check_notebook_name_exists_json>", methods = ["GET"])
def check_notebook_name_exists(check_notebook_name_exists_json):
	check_notebook_name_exists_dict = json_decoder.decode(check_notebook_name_exists_json)

	# if new installation, create global notebooks table

	if not (notebook_global_table_exist()):
		create_notebook_global_table()

	# opens the global notebooks table, and checks whether notebook exists

	fileObject = open("NOTEBOOKS_DATA", "rb")
	table = pickle.load(fileObject)

	if any(obj['notebook_name'] == check_notebook_name_exists_dict['notebook_name'] for obj in table):
		return json_encoder.encode({"message":"Success", "comment":"Notebook name exists"})

	return json_encoder.encode({"message":"Success", "comment": "Notebook name available"})

@app.route("/get_user_notebooks/<get_user_notebooks_json>", methods = ["GET"])
def get_user_notebooks(get_user_notebooks_json):
	get_user_notebooks_dict = json_decoder.decode(get_user_notebooks_json)

	# opens user table and returns list of notebooks opened by that user

	table = pickle.load(open("USERTABLE", "rb"))

	for obj in table:
		if (obj['username'] == get_user_notebooks_dict['username']):
			return json_encoder.encode({"message":"Success", "notebook_names":obj['shared_notebooks'] + obj['created_notebooks']})

	return json_encoder.encode({"message":"Failure"})

@app.route("/add_notebook", methods = ["POST"])
def add_notebook():
	print("changed")
	try:
		# notebook is of type weakdict to create references of it
		notebook = weakdict(request.json)

		# creating a reference of notebook's data
		weakdict_notebook = weakref.proxy(notebook)

		fileObject = open("NOTEBOOK_"+notebook['notebook_name'], "wb")
		pickle.dump(notebook, fileObject)
		fileObject.close()

		# if new installation, create a global notebooks table

		if not (notebook_global_table_exist()):
			create_notebook_global_table()

		# open global notebooks table and add notebook configuration

		fileObject = open("NOTEBOOKS_DATA", "rb")
		table = pickle.load(fileObject)
		fileObject.close()

		table.append({
						"notebook_name": notebook['notebook_name'],
						"GPU_count": int(notebook['GPU_count']),
						"CPU_count": int(notebook['CPU_count']),
						"is_online": False
					})

		fileObject = open("NOTEBOOKS_DATA", "wb")
		pickle.dump(table, fileObject)
		fileObject.close()

		# open global user table and add this notebook to user's list of created notebooks

		table = pickle.load(open("USERTABLE", "rb"))
		for obj in table:
			if obj['username'] == notebook['username']:
				obj['created_notebooks'].append(notebook['notebook_name'])

		pickle.dump(table, open("USERTABLE", "wb"))

		return json_encoder.encode({"message":"Success", "comment": "Notebook created"})
	except:
		return json_encoder.encode({"message":"Failure", "comment": "Other error"})

@app.route("/get_devices/", methods = ["GET"])
def get_devices():
	# Currently works only on Linux
	# Fails on windows.

	# Check for unix
	if(os.name == 'posix'):
		
		# get GPU count if avaiable
		try:
			n_gpu = len(GPUtil.getGPUs())
		except:
			n_gpu = 0

		# get CPU count
		n_cpu = psutil.cpu_count()

	# For windows, use tensorflow to get details
	else:
		local_devices = device_lib.list_local_devices()
		n_gpu = len([x.name for x in local_devices if x.device_type == 'GPU'])
		n_cpu = psutil.cpu_count()

	# if new installation, create a global notebooks table

	if not (notebook_global_table_exist()):
		create_notebook_global_table()

	table = pickle.load(open("NOTEBOOKS_DATA", "rb"))

	# Send number of CPUs and GPUs currently available

	a_gpu = n_gpu - sum(obj["GPU_count"] for obj in table if obj['is_online'])
	a_cpu = n_cpu - sum(obj["CPU_count"] for obj in table if obj['is_online'])

	return json_encoder.encode({"message":"Success", "GPU_count": n_gpu, "CPU_count":n_cpu, "GPU_available": a_gpu, "CPU_available": a_cpu})

@app.route("/load_existing_notebook", methods = ["POST"])
def load_existing_notebook():
	# Send data to UI to load back existing notebook

	data = request.json
	notebook = get_notebook_data(data['notebook_name'])

	dct = {}
	for key in notebook:
		# need not send model and other array type of data
		if key not in {'model', 'x_raw', 'x_preprocessed', 'x_test', 'x_train', 'y_test', 'y_train', '_model','y_raw','confusion_matrix'}:
			dct[key] = notebook[key]

	return json_encoder.encode({"message": "Success", "notebook_data": dct})

'''
Route functions used by upload-data
- Can upload table in the form of CSV
- Can upload raw files in the form of npz and pkl
- Can use pre-existing datasets
'''

@app.route("/upload_table", methods = ["POST"])
def upload_table():
	data = request.form
	
	notebook = get_notebook_data(data['notebook_name'])

	# Check if file has been uploaded succesfully
	if 'file' not in request.files:
		return json_encoder.encode({"message":"Failure", "comment":"No file received"})
	
	file = request.files['file']
	
	# Check if there is a file
	if file.filename == '':
		return json_encoder.encode({"message":"Failure", "comment":"No file selected"})

	if(request.form['load_notebook_status'] == 'false'):

		# Check for file types
		if file and allowed_file(file.filename):

			filename = secure_filename(file.filename)
			file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

			uploaded_file = open(os.path.join(app.config['UPLOAD_FOLDER'], filename),"r")
			reader = csv.reader(uploaded_file)
			total_cols = len(next(reader))
			features_cols = []
			label_cols = []

			for col_num in range(0,total_cols-1):
				features_cols.append(col_num)

			label_cols.append(total_cols-1)

			# extract contents of the file to give X and Y data
			csvObject = CSV(os.path.join(app.config['UPLOAD_FOLDER'], filename), {'features':features_cols, 'labels':label_cols}, False)
			X, Y = csvObject.extract()

		# store extracted data into notebook
		notebook['x_raw'] = X
		notebook['y_raw'] = Y
		notebook['file_name'] = data['file_name']

		set_notebook_data(data['notebook_name'])

	return json_encoder.encode({"message":"Success", "comment":"Table loaded successfully"})

@app.route("/upload_raw", methods = ["POST"])
def upload_raw():

	# Check if file has been uploaded succesfully
	if 'file' not in request.files:
		return json_encoder.encode({"message":"Failure", "comment":"No file received"})

	file = request.files['file']

	# Check if there is a file
	if file.filename == '':
		return json_encoder.encode({"message":"Failure", "comment":"No file selected"})
		
	# Check for file types
	if file and allowed_file(file.filename):
		filename = secure_filename(file.filename)
		file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
		
		# extract raw binary data
		rawObject = RawFile(os.path.join(app.config['UPLOAD_FOLDER'], filename), {'features':[0], 'labels':[1]}, False)
		X, Y = rawObject.extract()

		data = request.json
		notebook = get_notebook_data(data['notebook_name'])

		# store dataset in notebook
		notebook['x_raw'] = X
		notebook['y_raw'] = Y

		set_notebook_data(data['notebook_name'])

	return json_encoder.encode({"message":"Success", "comment":"Data loaded successfully"})

@app.route("/upload_predefined", methods = ["POST"])
def upload_predefined():

	# Use a pre existing dataset
		# Boston housing
		# CIFAR10
		# CIFAR100
		# Iris
		# Oxford17 flowers
		# MNIST

	data = request.json
	notebook = get_notebook_data(data['notebook_name'])

	# load dataset from datasets folder into notebook

	_x = numpy.load(open("datasets/"+data['dataset_name']+"/X", "rb"))

	notebook['x_raw'] = numpy.reshape(_x, newshape = (-1, numpy.prod(_x.shape[1:])))
	notebook['y_raw'] = numpy.load(open("datasets/"+data['dataset_name']+"/Y", "rb"))

	set_notebook_data(data['notebook_name'])

	return json_encoder.encode({"message":"Success", "comment":"Data loaded successfully"})

'''
@app.route("/preprocessing", methods = ["POST"])
def preprocessing():

	data = request.json

	notebook = get_notebook_data(data['notebook_name'])

	# function that preprocesses data using sklearn.preprocessing functions.
	def _preprocess(my_json, X):
		
		# import the required sklearn module
		module = importlib.import_module('sklearn.'+my_json['module'])
		_class = getattr(module, my_json['class'])
		
		# try to preprocess
		try:
			_X = _class(**my_json['hyperparameters']).fit_transform(X)
		except:
			_X = _class(**my_json['hyperparameters']).fit(X)
		
		return _X

	# get raw data from notebook
	X = notebook['x_raw'] if 'x_preprocessed' not in notebook else notebook['x_preprocessed']

	if (data['model_parameters']['module'] in PREPROC):
		_X = _preprocess(data['model_parameters'], X)

		# add the preprocessed data to the notebook