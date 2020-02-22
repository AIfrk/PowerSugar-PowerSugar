import json

# Information required by flask

ABSOLUTE_PATH = '../Backend'
UPLOAD_FOLDER = ABSOLUTE_PATH+'/uploads'

# Check for uploading any file

ALLOWED_EXTENSIONS = set(['npz', 'csv', 'tsv', 'pkl', 'pickle', 'txt'])

def allowed_file(filename):
	return '.' in filename 