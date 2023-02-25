from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String

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
        address = db.Column(db.String(256), unique=False, nullable=False)
        phone = db.Column(db.String(256), unique=True, nullable=True)
        category = db.Column(db.String(256), unique=False, nullable=False)
        website = db.Column(db.String(256), unique=False, nullable=True)
        days = db.Column(db.String(256), unique=False, nullable=False)
        opening_time = db.Column(db.Time, unique=False, nullable=False)
        closing_time = db.Column(db.Time, unique=False, nullable=False)
        
        