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

		nextBuses = {}

		speech = "ok"
		#print(nextBuses)
		for each in nextBuses:
			route_id = each
			print('route_id' + route_id)
			update = nextBuses[each][0]
			#print('update: ' + update)
			timeStr = update[0]
			trip_id = update[1]
			delay = update[2]
			mins = bus.timeUntil(timeStr).__str__()
			#timeStr = str(mins) + " minutes"
			speech += str("The next " + route_id + " bus arrives in " + mins + " minutes. ")
			speech += str('trip ' + trip_id + '.')
			if delay != '0':
				speech += str("With a delay value of " + delay + ". Whatever that means. ")

		self.wfile.write(bytes(json.dumps(speech), "utf-8"))
		#self.wfile.write(bytes("<html><head><title>Title goes here.</title></head>", "utf-8"))
		#self.wfile.write(bytes("<body><p>This is a test.</p>", "utf-8"))
		#self.wfile.write(bytes("<p>You accessed path: %s</p>" % self.path, "utf-8"))
		#self.wfile.write(bytes("</body></html>", "utf-8"))

	def do_POST(self):
		self.send_response(200)
		self.send_header("Content-type", "application/json")
		self.end_headers()

		content_len = int(self.headers['content-length'])
		#print(self.rfile.read(content_len).decode("utf-8"))
		self.body = json.loads((self.rfile.read(content_len)).decode("utf-8"))
		# print(self.body)

		
		res = self.getCar(self.body)
		self.wfile.write(bytes(json.dumps(res), "utf-8"))

		#self.wfile.write(bytes(json.dumps(buildRes()), "utf-8"))
		#result = dbstuff.getCarsAtDealership(body['index'])
		#result = list(result)
		#list(result)
		#self.wfile.write(bytes(str(result), "utf-8"))

class DataHandler():
	def __init__(self):
		print('constructor!')
		self.data = {}
		self.INTENTS = {
			# 'PlayMovie': Server.playMovieIntent,
			# 'AMAZON.PauseIntent': Server.pauseMovieIntent,
			# 'AMAZON.PlaybackAction<object@TVSeries>': Server.playTVSeriesIntent
		}

		
#bus.downloadTripUpdates()
#bus.getTripUpdates()

serv = HTTPServer((hostName, hostPort), Server)
#context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
#context.load_cert_chain(certfile='./cert/cert.pem', keyfile='./cert/privkey.pem')
#serv.socket = context.wrap_socket(serv.socket, server_side=True)
print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

dh = DataHandler()

try:
	serv.serve_forever()
except KeyboardInterrupt:
	pass

serv.server_close()
print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))
