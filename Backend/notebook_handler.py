import pickle
import weakref
import os

# if new installation, create a global notebook table to keep track of all notebooks

def create_notebook_global_table():
	fileObject = open("NOTEBOOKS_DATA", "wb")
	pickle.dump([], fileObject)
	fileObject.close()

	return True

# check whether the global notebook table exists

def notebook_global_table_exist():
	return os.path.exists("NOTEBOOKS_DATA")	

# Global variable to keep track of opened notebooks

ACTIVE_NOTEBOOKS = {}

# Returns a reference to notebook data

def get_notebook_data(notebook_name):

	# if notebook has not been loaded yet
	if notebook_name not in ACTIVE_NOTEBOOKS:

		# load as append binary and reading
		fileObject = open("NOTEBOOK_" + notebook_name, "ab+")
		
		# pickle needs the file pointer to point to starting of the file
		fileObject