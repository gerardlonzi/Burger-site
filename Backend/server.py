from flask import Flask

server = Flask(__name__)

@server.route('/')
def sendMail():
    pass
    



if __name__ == "__main__":
    server.run(debug=True)