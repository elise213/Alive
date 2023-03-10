
import click
from api.models import db, User, Resource

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    # @app.cli.command("insert-test-users") # name of our command
    # @click.argument("count") # argument of out command
    # def insert_test_data(count):
    #     print("Creating test users")
    #     for x in range(1, int(count) + 1):
    #         user = User()
    #         user.email = "test_user" + str(x) + "@test.com"
    #         user.password = "123456"
    #         user.is_active = True
    #         db.session.add(user)
    #         db.session.commit()
    #         print("User: ", user.email, " created.")

    #     print("All test users created")

    #     ### Insert the code to populate others tables if needed
           
    #     def setup_commands(app):
    

    # @app.cli.command("populate-resources") # name of our command
    # def populate_resources():
    #    print("populating resources")
    #    resources = [
    #        {
    #             "name" : "Urban Partners",
    #             "address" : "2936 W. 8th Street, Los Angeles, CA 90005",
    #             "phone" : "213-401-1191",
    #             "category" : "food",
    #             "website" : "", 
    #             "schedule" : "",
    #             "descrition" : "",
    #             # "organization_id" : "" 
    #        },
    #         {
    #             "name" : "Glendale Public Health Center",
    #             "address" : "501 N. Glendale Avenue Glendale CA 91206",
    #             "phone" : "",
    #             "category" : "health",
    #             "website" : "www.com", 
    #             "schedule" : "",
    #             "descrition" : "bla bla bla",
    #             # "organization_id" : "" 
    #        },
    #         {
    #             "name" : "LAHSA Hand Washing Station - Hollywood",
    #             "address" : "Hollywood Blvd and North Gower, Los Angeles, CA 90028",
    #             "phone" : "",
    #             "category" : "hygiene",
    #             "website" : "www.com", 
    #             "schedule" : "",
    #             "descrition" : "bla bla bla",
    #             # "organization_id" : "" 
    #        },
    #         {
    #             "name" : "The Source: Free Health & Emergency Shelter Services",
    #             "address" : "7140 W. Sunset Boulevard Los Angeles, CA 90046",
    #             "phone" : "",
    #             "category" : "shelter",
    #             "website" : "www.com", 
    #             "schedule" : "",
    #             "descrition" : "bla bla",
    #             # "organization_id" : "" 
    #        }
    #    ]
    #    for resource in resources : 
    #        new_resource = Resource(
    #            name = resource["name"],
    #            address = resource["address"],
    #            phone = resource["phone"],
    #            category = resource["category"],
    #            website = resource["website"],
    #            schedule = resource["schedule"],
    #            description = resource["description"],
    #         #    organization_id = resource["organization_id"]
    #        )
    #        db.session.add(new_resource)
    #        db.session.commit()