import numpy as np
import pandas as pd

class CSV:

	def __init__(self, filename, column_json, has_columns):

		self.filename = filename
		self.column_json = column_json
		self.has_columns = has_columns

	def extract(self):

		# For excel files with headings

		if self.filename[-5:] == '.xlsx' and self.has_columns :
			df = pd.read_excel(self.filename)

		# For excel files without headings

		elif self.filename[-5:] == '.xlsx' :
			df = pd.r