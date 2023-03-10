from app import app
import json
from api.models import Resource, db


with app.app_context(): 
    resources = []
    with open("./src/data/resources.json", "rt") as resourcefile: 
        resources = json.loads(resourcefile.read())
    resources = [Resource(**resource) for resource in resources]
    db.session.add_all(resources)
    db.session.commit()