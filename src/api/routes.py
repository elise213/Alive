"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Organization, Resource, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route("/login", methods = ["POST"])
def create_token():
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        name = request.json.get("name", None)
        if not email: 
            return jsonify({"message": "Email is required"}), 400
        if not password: 
            return jsonify({"message": "Password is required"}), 400
        user = User.query.filter_by(email=email).first()
        # print(user.password)
        if not user: 
            return jsonify({"message": "email is incorrect"}), 401
        if not check_password_hash(user.password, password):
            return jsonify({"message": "password is incorrect"}), 401
        favorites = getFavoritesByUserId(user.id)
        expiration = datetime.timedelta(days=3)
        access_token = create_access_token(identity = user.id, expires_delta=expiration)
        return jsonify(access_token=access_token, is_org=user.is_org, avatar=user.avatar, name=user.name, favorites=favorites)

@api.route("/createUser", methods = ["POST"])
def create_user():
    if request.method == "POST":
        request_body = request.get_json()
        if not request_body['is_org']:
            return jsonify({"message": 'Must enter yes or no'})
        if not request_body["name"]:
            return jsonify({"message": "Name is required"}), 400
        if not request_body["email"]:
            return jsonify({"message": "Email is required"}), 400
        if not request_body["password"]:
            return jsonify({"message": "Password is required"}), 400
        user = User.query.filter_by(email=request_body["email"]).first()
        if user: 
            return jsonify({"message": "email already exists"}), 400
        user = User(
            is_org = request_body['is_org'],
            name = request_body["name"],
            email = request_body["email"],
            password = generate_password_hash(request_body["password"]),
            avatar = request_body['userAvatar']
            )
        db.session.add(user)
        db.session.commit()
        return jsonify({"created": "Thank you for registering", "status": "true"}), 200

    if request.method == "POST":
        request_body = request.get_json()
        if not request_body["name"]:
            return jsonify({"message": "Name is required"}), 400
        if not request_body["email"]:
            return jsonify({"message": "Email is required"}), 400
        if not request_body["password"]:
            return jsonify({"message": "Password is required"}), 400
        user = Organization.query.filter_by(email=request_body["email"]).first()
        if user: 
            return jsonify({"message": "email already exists"}), 400
        user = Organization(
            name = request_body["name"],
            email = request_body["email"],
            password = generate_password_hash(request_body["password"])       
            )
        db.session.add(user)
        db.session.commit()
        return jsonify({"created": "Thank you for registering", "status": "true"}), 200
    
@api.route("/createResource", methods = ["POST"])
def create_resource():
    if request.method == "POST":
        request_body = request.get_json()
        if not request_body["name"]:
            return jsonify({"message": "Name is required"}), 400
        resource = Resource.query.filter_by(name=request_body["name"]).first()
        if resource: 
            return jsonify({"message": "Resource already exists"}), 400
        resource = Resource(
            name = request_body["name"],
            address = request_body["address"],
            phone = request_body["phone"],
            website = request_body["website"],
            schedule = request_body["schedule"],
            description = request_body["description"],       
            )
        db.session.add(resource)
        db.session.commit()
        return jsonify({"created": "Thank you for creating a resource!", "status": "true"}), 200
    
# Create comments
@api.route('/createComment', methods=['POST'])
def create_comment(id, user_id, resource_id, body, user, parentId):
    comment = Comment.query.get(id)
    if request.method == 'POST':
        request_body = request.get_json()

        if not request_body["comment_cont"]:
            return jsonify({"message": "Please include a message"}), 400
        parentId = Comment.query.filter_by(parentId=request_body["parentId"]).first()
        resource = Comment(
            id = request_body[id],
            user_id = request_body[user_id],
            resource_id = request_body[resource_id],
            comment_cont = request_body[comment_cont],
            # created_at = 
            parentId = request_body[parentId]
        )
            
        return jsonify(data=commentList.serialize())
        db.session.add(comment)
        db.session.commit()
        return jsonify({"created": "Thank you for your feedback", "status": "true"}), 200

# get comments
@api.route('/getComments/<int:userId>', methods=['GET'])
def getComments(id):
    commentList = Comment.query.get(id)
    if commentList is None:
        return jsonify(msg="There are no comments yet")
    else:
        return jsonify(data=commentList.serialize())

# get resources for map
@api.route('/getResources', methods=['GET'])
def getResources():
    resourceList = Resource.query.all()
    if resourceList is None:
        return jsonify(msg="No resources found")
    all_resources = list(map(lambda resource: resource.serialize(), resourceList))
    return jsonify(data=all_resources)

# add favorite resource
@api.route('/addFavorite', methods=['POST'])
@jwt_required()
def addFavorite():
    userId = get_jwt_identity()
    request_body = request.get_json()
    fav = Favorites.query.filter_by(userId=userId, name=request_body["name"]).first()
    if fav : 
        return jsonify(message="favorite already exists")
    favorite = Favorites(
        userId=userId,
        name=request_body["name"],
    )
    print(request_body["name"])
    db.session.add(favorite)
    db.session.commit()
    return jsonify(message="okay")
    
# remove favorite resource
@api.route('/removeFavorite', methods=['DELETE'])
@jwt_required()
def removeFavorite():
    userId = get_jwt_identity()
    request_body = request.get_json()
    Favorites.query.filter_by(userId=userId, name=request_body["name"]).delete()
    db.session.commit()
    return jsonify(message="okay")
    
# get all favorites
@api.route('/getFavorites', methods=['GET'])
@jwt_required()
def getFavorites():
    userId = get_jwt_identity()
    favorites = getFavoritesByUserId(userId)
    return jsonify(favorites=favorites)
def getFavoritesByUserId(userId):
    getFavorites = Favorites.query.filter_by(userId=userId)
    getFavorites = [getFavorites.serialize() for favorite in getFavorites]
    print(getFavorites)
    return getFavorites
