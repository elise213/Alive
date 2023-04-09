"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Resource, Favorites, Comment, Drop, Schedule, Offering, FavoriteOfferings
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

api = Blueprint('api', __name__)

# login / create token
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
        if not user: 
            return jsonify({"message": "email is incorrect"}), 401
        if not check_password_hash(user.password, password):
            return jsonify({"message": "password is incorrect"}), 401
        favorites = getFavoritesByUserId(user.id)
        for favorite in favorites:
            resource = Resource.query.filter_by(name = favorite["name"]).first()
        # favoriteOfferings = getFavoriteOfferingsByUserId(user.id)
        # for offering in offerings:
        #     offering = Offering.query.filter_by(name = offering["title"]).first()
        expiration = datetime.timedelta(days=3)
        access_token = create_access_token(identity = user.id, expires_delta=expiration)
        return jsonify(access_token=access_token, is_org=user.is_org, avatar=user.avatar, name=user.name, favorites=favorites)

# create user
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
    

    
# __________________________________________________COMMENTS
# Create comments
@api.route('/createComment', methods=['POST'])
@jwt_required()
def create_comment():
    if request.method == "POST":
        user_id = get_jwt_identity()
        request_body = request.get_json()
        if not request_body["comment_cont"]:
            return jsonify({"message": "Please include a message"}), 400
        comment = Comment(
        user_id = user_id,
        resource_id = request_body["resource_id"],
        comment_cont = request_body["comment_cont"],
        parentId = request_body["parentId"],
            )
        db.session.add(comment)
        db.session.commit()
        return jsonify({"created": "Thank you for your feedback", "status": "true"}), 200

# get comments
@api.route('/getcomments/<int:resource_id>', methods=['GET'])
def getcomments(resource_id):
    # resource_id = request.get_json("resource_id")
    print(resource_id)
    comments = getCommentsByResourceId(resource_id)
    return jsonify({"comments": comments})
def getCommentsByResourceId(resourceId):
    comments = Comment.query.filter_by(resource_id=resourceId).all()
    serialized_comments = [comment.serialize() for comment in comments]
    return serialized_comments

# __________________________________________________RESOURCES

# get resources
@api.route('/getResources', methods=['GET'])
def getResources():
    resourceList = Resource.query
    if "category" in request.args: 
        resourceList = resourceList.filter_by(category = request.args["category"]) 
    if resourceList is None:
        return jsonify(msg="No resources found")
    all_resources = list(map(lambda resource: resource.serialize(), resourceList))
    return jsonify(data=all_resources)

# @api.route('/getResources', methods=['GET'])
# def getResources():
#     resourceList = Resource.query.all()
#     if resourceList is None:
#         return jsonify(msg="No resources found")
#     all_resources = list(map(lambda resource: resource.serialize(), resourceList))
#     return jsonify(data=all_resources)

# create resource
@api.route("/createResource", methods = ["POST"])
@jwt_required()
def create_resource():
    if request.method == "POST":
        user_id = get_jwt_identity()
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
            category = request_body["category"],
            website = request_body["website"],
            description = request_body["description"],
            latitude = request_body["latitude"],
            longitude = request_body["longitude"],
            image = request_body["image"],
            image2 = request_body["image2"],
            user_id=user_id,
            )
        schedule = Schedule(
            mondayStart = request_body["mondayStart"],
            mondayEnd = request_body["mondayEnd"]
            )
        db.session.add(resource)
        db.session.add(schedule)
        db.session.commit()
        return jsonify({"created": "Thank you for creating a resource!", "status": "true"}), 200

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
    print("Request body:", request_body)
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
    
# get favorite resousrces
@api.route('/getFavorites', methods=['GET'])
@jwt_required()
def getFavorites():
    userId = get_jwt_identity()
    favorites = getFavoritesByUserId(userId)
    return jsonify(favorites=favorites)
def getFavoritesByUserId(userId):
    favorites = Favorites.query.filter_by(userId=userId).all()
    serialized_favorites = [fav.serialize() for fav in favorites]
    return serialized_favorites

def getCommentsByResourceId(resourceId):
    comments = Comment.query.filter_by(resource_id=resourceId).all()
    serialized_comments = [comment.serialize() for comment in comments]
    return serialized_comments

# __________________________________________________OFFERINGS

# get offerings
@api.route('/getOfferings', methods=['GET'])
def getOfferings():
    # offeringsList = Offering.query
    offeringList = Offering.query.all()
    # if "category" in request.args: 
    #     offeringList = offeringList.filter_by(category = request.args["category"]) 
    if offeringList is None:
        return jsonify(msg="No offerings found")
    all_offerings = list(map(lambda offering: offering.serialize(), offeringList))
    return jsonify(data=all_offerings)

# create offering
@api.route("/createOffering", methods = ["POST"])
@jwt_required()
def create_offering():
    if request.method == "POST":
        user_id = get_jwt_identity()
        request_body = request.get_json()
        if not request_body["title"]:
            return jsonify({"message": "Title is required"}), 400
        offering = Offering.query.filter_by(title=request_body["title"]).first()
        if offering:
            return jsonify({"message": "Resource already exists"}), 400
        offering = Offering(
            title = request_body["title"],
            offering_type = request_body["offering_type"],
            description = request_body["description"],
            image = request_body["image"],
            image2 = request_body["image2"],
            user_id=user_id,
            )
        db.session.add(offering)
        db.session.commit()
        return jsonify({"created": "Thank you for creating an offering!", "status": "true"}), 200

# add favorite offering
@api.route('/addFavoriteOffering', methods=['POST'])
@jwt_required()
def addFavoriteOffering():
    userId = get_jwt_identity()
    request_body = request.get_json()
    fav = FavoriteOfferings.query.filter_by(userId=userId, title=request_body["title"]).first()
    if fav : 
        return jsonify(message="favorite already exists")
    favoriteOffering = FavoriteOfferings(
        userId=userId,
        title=request_body["title"],
    )
    print(request_body["title"])
    print("Request body:", request_body)
    db.session.add(favoriteOfferings)
    db.session.commit()
    return jsonify(message="okay")
    
# remove favorite offering
@api.route('/removeFavoriteOffering', methods=['DELETE'])
@jwt_required()
def removeFavoriteOffering():
    userId = get_jwt_identity()
    request_body = request.get_json()
    FavoriteOfferings.query.filter_by(userId=userId, title=request_body["title"]).delete()
    db.session.commit()
    return jsonify(message="okay")

# get favorite offerings
@api.route('/getFavoriteOfferings', methods=['GET'])
@jwt_required()
def getFavoriteOfferings():
    userId = get_jwt_identity()
    favoriteOfferings = getFavoriteOfferingsByUserId(userId)
    return jsonify(favoriteOfferings=favoriteOfferings)
def getFavoriteOfferingsByUserId(userId):
    favoriteOfferings = FavoriteOfferings.query.filter_by(userId=userId).all()
    serialized_favorites = [fav.serialize() for fav in favoriteOfferings]
    return serialized_favorites

# __________________________________________________DROP OFF LOCATIONS
# create drop
@api.route("/createDrop", methods = ["POST"])
@jwt_required()
def create_drop():
    if request.method == "POST":
        user_id = get_jwt_identity()
        request_body = request.get_json()
    if not request_body["name"]:
        return jsonify({"message": "Name is required"}), 400
    drop = Drop.query.filter_by(name=request_body["name"]).first()
    if drop:
        return jsonify({"message": "Drop already exists"}), 400
    drop = Drop(
        name = request_body["name"],
        address = request_body["address"],
        phone = request_body["phone"],
        description = request_body["description"],
        type = request_body["type"],
        identification = request_body["identification"],
        image = request_body["image"],
        )
    db.session.add(drop)
    db.session.commit()
    return jsonify({"created": "Thank you for creating a drop!", "status": "true"}), 200