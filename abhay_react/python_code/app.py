from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
import order_items
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # SQLite database file
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
login_user = None

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    repeat_psw = db.Column(db.String(80), nullable=False)

# Move db.create_all() inside the application context
#with app.app_context():
#    db.create_all()


@app.route('/submit_form', methods=['POST'])
def submit_form():
    print('method :==== ',request.method)
    if request.method == 'POST':
        email = request.form['email']
        psw = request.form['password']
        psw_repeat = request.form['pswrepeat']
        print('email :=======  ',email)

        try:
            new_user = User(email=email, password=psw, repeat_psw=psw_repeat)
            db.session.add(new_user)
            db.session.commit()

            return redirect(url_for('index'))
        except:
            return "Invalid entries or User already exist"


@app.route('/validate_user', methods=['POST'])
def validate_user():
    global login_user
    if request.method == 'POST':
        email = request.form['uname']
        psw = request.form['psw']

        login_user = User.query.filter_by(email=email).first()

        if login_user and login_user.password==psw:
            # Log the user in
            print("Login Successfully")
            return {"status":"success", "username":email}
            #return render_template('index.html', user=login_user)
        else:
            return {"status":"fail", "username":"No user"}


@app.route('/registered_users')
def registered_user():
    users = User.query.all()
    user_list = []

    for user in users:
        user_data = {
            'id': user.id,
            'email': user.email,
            'password': user.password
            # Add other fields as needed
        }
        user_list.append(user_data)

    return jsonify(users=user_list)


@app.route('/order', methods=['GET', 'POST'])
def order():
    total = 0
    data = request.json
    selected_values = data.get('values', [])
    print('select values : ',selected_values)
    desc_value = selected_values[::-1]
    print('desc values : ',desc_value)
    dropdn = [1,2,3,4,5,6]
    final = {}
    orderbook = []
    for i in desc_value:
        k = int(i) // 4
        print('k : ', k)
        if k+1 in dropdn:
            print ('dropdown selected = ',k+1)
            z = int(i) % 4
            print('option selected = ',z)

            final[k+1] = z
            dropdn.remove(k+1)
            print('dropdn : ',final)

            order_items.orderList[k]['quantity'] = z
            print('item : ',order_items.orderList[k])

            orderbook.append(order_items.orderList[k])

    print('final item list : ',orderbook)

    return jsonify({'message': 'Data received successfully', 'orders' : orderbook})


@app.route('/item_detail/data')
def item_detail():
    param_value = request.args.get('param')
    print('param : ',param_value)
    data = {'result': 'Data for param: ' + param_value}
    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
