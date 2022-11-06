from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def hello():
    # 'Frozen yoghurt', 159, 6.0, 24, 4.
    
    data = [
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        },
        { 
            "name": "yogurt", 
            "calories": 159, 
            "fat": 6, 
            "carbs": 24, 
            "protein": 4 
        }
    ]
    response = jsonify(data)

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5000", debug=True)

