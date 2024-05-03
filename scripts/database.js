const database = {
    locations: [
        {
            id: 1,
            name: "Northeast Section"
        }, {
            id: 2,
            name: "Northern Section"
        }, {
            id: 3,
            name: "Northwest Section"
        }, {
            id: 4,
            name: "Southwest Section"
        }, {
            id: 5,
            name: "Southern Section"
        }, {
            id: 6,
            name: "Southeast Section"
        },      
    ],
    attractions: [
        {
            id: 1,
            name: "Chamfort River"

        }, {
            id: 2,
            name: "Lost Wolf Hiking Trail"

        }, {
            id: 3,
            name: "Lodge"

        }, {
            id: 4,
            name: "Hotel"

        }, {
            id: 5,
            name: "Restaurant"

        }, {
            id: 6,
            name: "Gander River"

        }, {
            id: 7,
            name: "Campgrounds"

        }, {
            id: 8,
            name: "Office Park"

        }, {
            id: 9,
            name: "Children's Play Area"

        }, {
            id: 10,
            name: "Pine Bluffs Trail"

        },
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        }, {
            id: 2,
            name: "Canoeing"

        }, {
            id: 3,
            name: "Fishing"

        }, {
            id: 4,
            name: "Hiking"

        }, {
            id: 5,
            name: "Picnicking"

        }, {
            id: 6,
            name: "Rock Climbing"

        }, {
            id: 7,
            name: "Lodging"

        }, {
            id: 8,
            name: "Parking"

        }, {
            id: 9,
            name: "Zip Lines"

        },{
            id: 10,
            name: "Information"
        }
    ],
    guests: [
        {
            id: 1,
            name: "Bessie Richardson",
            locationId: 1
        }, {
            id: 2,
            name: "Ajay Finch",
            locationId: 6
        }, {
            id: 3,
            name: "Yousuf Orozco",
            locationId: 3
        }, {
            id: 4,
            name: "Elsie Strickland",
            locationId: 4
        }, {
            id: 5,
            name: "Justin Acevedo",
            locationId: 5
        }, {
            id: 6,
            name: "Jacques O'Sullivan",
            locationId: 6
        }, {
            id: 7,
            name: "Elmer Clark",
            locationId: 7
        }, {
            id: 8,
            name: "Tyrese Mack",
            locationId: 8
        }, {
            id: 9,
            name: "Doris Lyons",
            locationId: 9
        }, {
            id: 10,
            name: "Aayan Cantrell",
            locationId: 10
        },
    ],
    locationAttractions: [
        {
            id: 1,
            locationId: 1,
            attractionId: 1,
            //Chamfort River in Northeast Section
        }, {
            id: 2,
            locationId: 2,
            attractionId: 2,
            //Lost Wolf Hiking Trail in Northern Section
        }, {
            id: 3,
            locationId: 3,
            attractionId: 3
            //Lodge in Northern Section
        }, {
            id: 4,
            locationId: 3,
            attractionId: 4,
            //Hotel in Northern Section
        }, {
            id: 5,
            locationId: 3,
            attractionId: 5,
            //Restaurant in Northern Section
        }, {
            id: 6,
            locationId: 4,
            attractionId: 6,
            //Gander River in Southwest Section
        }, {
            id: 7,
            locationId: 5,
            attractionId: 7,
            //Campgrounds in Southern Section
        }, {
            id: 8,
            locationId: 5,
            attractionId: 8,
            //Office Park in Southern Section
        }, {
            id: 9,
            locationId: 5,
            attractionId: 9,
            //Childrens Play Area in Southern Section
        }, {
            id: 10,
            locationId: 6,
            attractionId: 10,
            //Pine Bluffs Trail in Southeast Section
        },
    ],
    locationServices: [
        {
            id: 1,
            locationId: 1,
            serviceId: 1,
            //Rafting in Northeast Section
        },{
            id: 2,
            locationId: 2,
            serviceId: 2,
            //Canoeing in Northeast Section
        },{
            id: 3,
            locationId: 2,
            serviceId: 3,
            //Fishing in Northeast Section
        },{
            id: 4,
            locationId: 2,
            serviceId: 4,
            //Hiking in Northern Section
        },{
            id: 5,
            locationId: 2,
            serviceId: 5,
            //Picnicking in Northern Section
        },{
            id: 6,
            locationId: 2,
            serviceId: 6,
            //Rock Climbing in Northern Section
        },{
            id: 7,
            locationId: 3,
            serviceId: 7,
            //Lodging in Northeast Section
        },{
            id: 8,
            locationId: 3,
            serviceId: 8,
            //Parking in Northeast Section
        },{
            id: 9,
            locationId: 3,
            serviceId: 10,
            //Information in Northeast Section
        },{
            id: 10,
            locationId: 3,
            serviceId: 5,
            //Picnicking in Northeast Section
        },{
            id: 11,
            locationId: 4,
            serviceId: 3,
            //Fishing in Southwest Section
        },{
            id: 12,
            locationId: 4,
            serviceId: 4,
            //Hiking in Southwest Section
        },{
            id: 13,
            locationId: 5,
            serviceId: 10,
            //Information in Southern Section
        },{
            id: 14,
            locationId: 5,
            serviceId: 7,
            //Lodging in Southern Section
        },{
            id: 15,
            locationId: 5,
            serviceId: 8,
            //Parking in Southern Section
        },{
            id: 16,
            locationId: 6,
            serviceId: 4,
            //Hiking in Southeast Section
        },{
            id: 17,
            locationId: 6,
            serviceId: 5,
            //Picnicking in Southeast Section
        },{
            id: 18,
            locationId: 6,
            serviceId: 9,
            //Zip lines in Southeast section
        },
    ]
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getAttractions = () => {
    return database.attractions.map(attractions => ({...attractions}))
}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))
}

export const getServices = () => {
    return database.services.map(services => ({...services}))
}

export const getLocationAttractions = () => {
    return database.locationAttractions.map(locationAttractions => ({...locationAttractions}))
}

export const getLocationServices = () => {
    return database.locationServices.map(locationServices => ({...locationServices}))
}