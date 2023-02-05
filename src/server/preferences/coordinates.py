import os

from smartystreets_python_sdk import SharedCredentials, StaticCredentials, exceptions, ClientBuilder
from smartystreets_python_sdk.us_street import Lookup as StreetLookup



def get_coords(street,city,state,zipcode):
   
    auth_id = ['ad21fe95-defd-8b05-2fcb-d8801551b1ad']
    auth_token = ['nk7pCigpGiAhSWlRtlar']

    credentials = StaticCredentials(auth_id, auth_token)
    client = ClientBuilder(credentials).build_us_street_api_client()

    lookup = StreetLookup()
    lookup.addressee = "John Doe"
    lookup.street = street
    lookup.city = city
    lookup.state = state
    lookup.zipcode = zipcode

    try:
        client.send_lookup(lookup)
    except exceptions.SmartyException as err:
        print(err)
        return

    result = lookup.result

    if not result:
        print("No candidates. This means the address is not valid.")
        return

    first_candidate = result[0]
    
    latitude = format(first_candidate.metadata.latitude)
    longitude = format(first_candidate.metadata.longitude)
    latlong = str(latitude+","+longitude)
    
    return latlong
    


# if __name__ == "__main__":
#     street = "55 Maple ST NW"
#     city = "Atlanta"
#     state = "Georgia"
#     zipcode = "30313"
#     print(get_coords(street,city,state,zipcode))
