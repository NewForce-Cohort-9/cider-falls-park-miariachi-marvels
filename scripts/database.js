const database = {
    locations: [
        {
            id: 1,
            name: "Location Name"
        }, {
            id: 1,
            name: "Location Name"
        }, {
            id: 1,
            name: "Location Name"
        }, {
            id: 1,
            name: "Location Name"
        }, {
            id: 1,
            name: "Location Name"
        }, {
            id: 1,
            name: "Location Name"
        },      
    ],
    attractions: [
        {
            id: 1,
            name: "Attraction Name"

        }, {
            id: 2,
            name: "Attraction Name"

        }, {
            id: 3,
            name: "Attraction Name"

        }, {
            id: 4,
            name: "Attraction Name"

        }, {
            id: 5,
            name: "Attraction Name"

        }, {
            id: 6,
            name: "Attraction Name"

        }, {
            id: 7,
            name: "Attraction Name"

        }, {
            id: 8,
            name: "Attraction Name"

        }, {
            id: 9,
            name: "Attraction Name"

        }, {
            id: 10,
            name: "Attraction Name"

        },
    ],
    services: [
        {
            id: 1,
            name: "Service Name"
        }, {
            id: 2,
            name: "Service Name"

        }, {
            id: 3,
            name: "Service Name"

        }, {
            id: 4,
            name: "Service Name"

        }, {
            id: 5,
            name: "Service Name"

        }, {
            id: 6,
            name: "Service Name"

        }, {
            id: 7,
            name: "Service Name"

        }, {
            id: 8,
            name: "Service Name"

        }, {
            id: 9,
            name: "Service Name"

        }, {
            id: 10,
            name: "Service Name"

        },
    ],
    guests: [
        {
            id: 1,
            name: "Name Here",
            locationId: 1
        }, {
            id: 2,
            name: "Name Here",
            locationId: 1
        }, {
            id: 3,
            name: "Name Here",
            locationId: 1
        }, {
            id: 4,
            name: "Name Here",
            locationId: 1
        }, {
            id: 5,
            name: "Name Here",
            locationId: 1
        }, {
            id: 6,
            name: "Name Here",
            locationId: 1
        }, {
            id: 7,
            name: "Name Here",
            locationId: 1
        }, {
            id: 8,
            name: "Name Here",
            locationId: 1
        }, {
            id: 9,
            name: "Name Here",
            locationId: 1
        }, {
            id: 10,
            name: "Name Here",
            locationId: 1
        },
    ],
    locationAttractions: [
        {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        }, {
            id: 1,
            locationId: 2,
            attractionId: 3
        },
    ],
    locationServices: [
        {
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
        },{
            id: 1,
            locationId: 2,
            serviceId: 3,
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