from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
import time, json, threading
from subprocess import PIPE, STDOUT
from pymongo import MongoClient

hostName = ""
hostPort = 9000

client = MongoClient()
db = client.inventory
inventory = db.vehicles
manufacturerInfo = db.ManufacturerInfo

class Server(BaseHTTPRequestHandler):

	def getCars(self, req={}):
		return [x for x in inventory.find(req)]

	def getManuInfo(self, req={}):
		return [x for x in manufacturerInfo.find(req)]
		
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

		message =  threading.currentThread().getName()
		self.wfile.write(bytes(message, "utf-8"))
		self.wfile.write(bytes('\n', "utf-8"))

		content_len = int(self.headers['content-length'])
		body = json.loads((self.rfile.read(content_len)).decode("utf-8"))

		if 'manu' in body:
			req = body['manu']
			res = self.getManuInfo(req)
			self.wfile.write(bytes(json.dumps(res), "utf-8"))
		else:
			res = self.getCars(body)
			self.wfile.write(bytes(json.dumps(res), "utf-8"))
		return


class DataHandler():
	def __init__(self):
		print('constructor!')
		self.data = {}

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    """Handle requests in a separate thread."""


serv = ThreadedHTTPServer((hostName, hostPort), Server)
print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

dh = DataHandler()

try:
	serv.serve_forever()
except KeyboardInterrupt:
	pass

serv.server_close()
print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))
