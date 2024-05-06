const database = {
    locations: [
        {
            id: 1,
            name: "Northwest Section",
            mainAttraction: "Lodge",
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/12/nature-1283747_1280.jpg'
        }, {
            id: 2,
            name: "Northern Section",
            mainAttraction: "Lost Wolf Hiking Trail",
            image: 'https://cdn.pixabay.com/photo/2018/07/15/22/42/doughboy-trail-foot-bridge-3540789_1280.jpg'
        }, {
            id: 3,
            name: "Northeast Section",
            mainAttraction: "Chamfort River",
            image: 'https://cdn.pixabay.com/photo/2017/06/26/08/53/ingleton-2443106_1280.jpg'
        }, {
            id: 4,
            name: "Southwest Section",
            mainAttraction: "Gander River",
            image: 'https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717_1280.jpg'
        }, {
            id: 5,
            name: "Southern Section",
            mainAttraction: "Campgrounds",
            image: 'https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_1280.jpg'
        }, {
            id: 6,
            name: "Southeast Section",
            mainAttraction: "Pine Bluffs Trail",
            image: 'https://cdn.pixabay.com/photo/2016/11/29/07/12/forest-1868028_1280.jpg'
        },      
    ],
    attractions: [
        // {
        //     id: 1,
        //     name: "Chamfort River"

        // }, {
        //     id: 2,
        //     name: "Lost Wolf Hiking Trail"

        // }, {
        //     id: 3,
        //     name: "Lodge"

         {
            id: 4,
            name: "Hotel"

        }, {
            id: 5,
            name: "Restaurant"

        // }, {
        //     id: 6,
        //     name: "Gander River"

        // }, {
        //     id: 7,
        //     name: "Campgrounds"

        }, {
            id: 8,
            name: "Office Park"

        }, {
            id: 9,
            name: "Children's Play Area"

        // }, {
        //     id: 10,
        //     name: "Pine Bluffs Trail"

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
            locationId: 1
        }, {
            id: 3,
            name: "Yousuf Orozco",
            locationId: 3
        }, {
            id: 4,
            name: "Elsie Strickland",
            locationId: 2
        }, {
            id: 5,
            name: "Justin Acevedo",
            locationId: 3
        }, {
            id: 6,
            name: "Jacques O'Sullivan",
            locationId: 6
        }, {
            id: 7,
            name: "Elmer Clark",
            locationId: 5
        }, {
            id: 8,
            name: "Tyrese Mack",
            locationId: 3
        }, {
            id: 9,
            name: "Doris Lyons",
            locationId: 3
        }, {
            id: 10,
            name: "Aayan Cantrell",
            locationId: 3
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
        // }, {
        //     id: 4,
        //     locationId: 3,
        //     attractionId: 4,
        //     //Hotel in Northern Section
        // }, {
        //     id: 5,
        //     locationId: 3,
        //     attractionId: 5,
        //     //Restaurant in Northern Section
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
        // }, {
        //     id: 8,
        //     locationId: 5,
        //     attractionId: 8,
        //     //Office Park in Southern Section
        // }, {
        //     id: 9,
        //     locationId: 5,
        //     attractionId: 9,
        //     //Childrens Play Area in Southern Section
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