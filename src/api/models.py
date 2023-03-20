from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.sql import func
from sqlalchemy.dialects.postgresql import ARRAY
import json

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    is_org = db.Column(db.String(80), nullable=False)
    avatar = db.Column(db.String(80))

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "is_org": self.is_org,
            "avatar": self.avatar,
            # do not serialize the password, its a security breach
        }
        
class Resource(db.Model):
        __tablename__ = "Resource"
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(256), unique=False, nullable=False)
        address = db.Column(db.String(256), unique=False, nullable=True)
        phone = db.Column(db.String(256), unique=False, nullable=True)
        category = db.Column(db.String(256), unique=False, nullable=True)
        website = db.Column(db.String(1000), unique=False, nullable=True)
        schedule = db.Column(db.JSON(), nullable=True)
        description = db.Column(db.String(1000), unique=False, nullable=True)
        latitude = db.Column(db.String(250), unique=False, nullable=True)
        longitude = db.Column(db.String(250), unique=False, nullable=True)
        image = db.Column(db.String(1000), unique=False, nullable=True)
        image2 = db.Column(db.String(1000), unique=False, nullable=True)
        logo = db.Column(db.String(500), unique=False, nullable=True)
        icon = db.Column(db.String(250), unique=False, nullable=True)
        user_id = db.Column(db.Integer, unique=False, nullable=True)
      
        def __repr__(self):
            return f'<Resource {self.name}>'
        
        def serialize(self):
            schedule = json.loads(self.schedule.replace("'", "\""))
            schedule_string = json.dumps(schedule)
            return {
                "id": self.id,
                "name": self.name,
                "address": self.address,
                "phone": self.phone,
                "website": self.website,
                "schedule" : schedule,
                "description" : self.description,     
                "category" : self.category,
                "website" : self.website,
                "image" : self.image,
                "image2" : self.image2,
                "logo" : self.logo,   
                "icon" : self.icon, 
                "user_id" : self.user_id,
                "latitude" : self.latitude,
                "longitude" : self.longitude                   
                # do not serialize the password, its a security breach
            }
    
class Comment(db.Model):
    __tablename__ = "Comment"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey("User.id"))         
    resource_id = db.Column(db.Integer, ForeignKey("Resource.id")) 
    comment_cont = db.Column(db.String(250), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    parentId = db.Column(db.Integer, ForeignKey("Comment.id"), nullable=True)
    
    def __repr__(self):
        return f'<Comment {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "resource_id": self.resource_id,
            "comment_cont": self.comment_cont,
            "parentId": self.parentId
        }

class Favorites(db.Model):
    __tablename__ = 'Favorites'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    userId = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return f'<Favorites {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "userId": self.userId,
        }