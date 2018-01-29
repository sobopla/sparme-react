from http.server import BaseHTTPRequestHandler, HTTPServer
import time, subprocess, json
from subprocess import PIPE, STDOUT
from pymongo import MongoClient

hostName = ""
hostPort = 9000

client = MongoClient()
db = client.inventory
inventory = db.vehicles
manufacturerInfo = db.ManufacturerInfo

class Server(BaseHTTPRequestHandler):

	def parseRequest(self, req={}):
		if 'make' in req:
			return dbstuff.getCarsOfMake(req['make'])
		if 'model' in req:
			a = []
		return {}

	def getCar(self, req={}):
		return [x for x in inventory.find(req)]
		# return inventory.find(req)
		
	def do_HEAD(s):
		s.send_response(200)
		s.send_header("Content-type", "text/html")
		s.end_headers()

	def do_GET(self):
		self.send_response(200)
		self.send_header("Content-type", "application/json")
		self.end_headers()


		self.wfile.write(bytes(json.dumps({"ok": "cool"}), "utf-8"))


	def do_POST(self):
		self.send_response(200)
		self.send_header("Content-type", "application/json")
		self.end_headers()

		content_len = int(self.headers['content-length'])

		self.body = json.loads((self.rfile.read(content_len)).decode("utf-8"))
		# print(self.body)

		
		res = self.getCar(self.body)
		self.wfile.write(bytes(json.dumps(res), "utf-8"))

class DataHandler():
	def __init__(self):
		print('constructor!')
		self.data = {}
		
		

serv = HTTPServer((hostName, hostPort), Server)
print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

dh = DataHandler()

try:
	serv.serve_forever()
except KeyboardInterrupt:
	pass

serv.server_close()
print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))
