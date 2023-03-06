from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.sql import func

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
        
class Resource(db.Model):
        __tablename__ = "Resource"
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(256), unique=False, nullable=False)
        address = db.Column(db.String(256), unique=False, nullable=True)
        phone = db.Column(db.String(256), unique=True, nullable=True)
        category = db.Column(db.String(256), unique=False, nullable=True)
        website = db.Column(db.String(256), unique=False, nullable=True)
        schedule = db.Column(db.String(500), unique=False, nullable=True)
        organization_id = db.Column(db.Integer, db.ForeignKey("Organization.id"), nullable=True)
      
        def __repr__(self):
            return f'<Resource {self.name}>'
        
        def serialize(self):
            return {
                "id": self.id,
                "name": self.name,
                "address": self.address,
                "phone": self.phone,
                "website": self.website,
                "schedule": self.schedule                            
                # do not serialize the password, its a security breach
            }
            
class Organization(db.Model):
    __tablename__ = "Organization"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256))
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    resource = db.relationship("Resource", backref="Organization", lazy=True)
    
    def __repr__(self):
        return f'<Organization {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
    class Comment(db.Model):
        __tablename__ = "Comment"
        id = db.Column(db.Integer, primary_key=True, index=True)
        user_id = db.Column(db.Integer, ForeignKey("user.id"))         
        resource_id = db.Column(db.Integer, ForeignKey("resource.id"), index=True) 
        comment_cont = db.Column(db.String(250), nullable=False)
        created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
        parentId = db.Column(db.Integer, ForeignKey("comment.id"), nullable=True)
        
    def __repr__(self):
        return f'<Comment {self.id}>'
    
    def serialize_Comment(self):
        return {
            id: self.id,
            user_id: self.user_id,
            resource_id: self.resource_id,
            comment_cont: self.body,
            parentId: self.parentId
        }
    