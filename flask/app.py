from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
import requests
import os
from flask_cors import CORS
from googlesearch import search

# Initialize Flask App
app = Flask(__name__)
CORS(app)
@app.route('/getResources', methods=['POST'])
def getSum():
    data = request.get_json()
    tasknames = data["tasks"]
    status = data["taskStatus"]
    res = getResources(tasknames, status)
    return jsonify(res), 200

def getResources(tasknames, status):
    result = []
    for ind in range(len(status)):
        if(status[ind] == "Incomplete"):
            tempList = []
            links = search(tasknames[ind], tld="co.in", num = 3, stop = 3, pause=2)
            for link in links:
                tempList.append(link)
            result.append(tempList)
    return result


port = int(os.environ.get('PORT', 4040))
if __name__ == '__main__':
    app.run(threaded=True, port=port)