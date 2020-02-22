import pickle
import weakref
import os

# if new installation, create a global notebook table to keep track of all notebooks

def create_notebook_global_table():
	fileObject = open("NOTEBOOKS_DATA", "wb")
	pickle.dump([], fileObject)
	fileObject.close()

	return True

# check whether the global notebook 