
from http.client import responses

from  flask import Flask, request, jsonify
from flask_cors import CORS
import  util
app = Flask(__name__)
CORS(app)


@app.route('/get_location_names')
def get_location_names():
    locations = util.get_location_names()
    response = jsonify({
        'location': util.get_location_names()
    })
    response.headers.add("Access-Control-Allow-Origin","*")
    return response


@app.route('/predict_home_price',methods=['POST'])
def predict_home_price():
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(location,total_sqft,bhk,bath)
    })

    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    print("Starting Python Falsk Server For Home Price Prediction")
    util.load_save_artifacts()
    print(util.get_location_names())
    app.run(debug=True)