from app import app
import json
from api.models import Resource, Offering, db


with app.app_context(): 
    resources = []
    with open("./src/data/resources.json", "rt") as resourcefile: 
        resources = json.loads(resourcefile.read())
    resources = [Resource(**resource) for resource in resources]
    db.session.add_all(resources)
    db.session.commit()

with app.app_context(): 
    offerings = []
    with open("./src/data/offerings.json", "rt") as resourcefile: 
        offerings = json.loads(resourcefile.read())
    offerings = [Offering(**offering) for offering in offerings]
    db.session.add_all(offerings)
    db.session.commit()