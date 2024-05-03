import {getLocations, getAttractions} from "./database.js"

const locations = getLocations()
const attractions = getAttractions()

export const Attractions =() => {
    let attractionsHTML = "<ol>";
    for (const attraction of attractions) {
        attractionsHTML += `<li data-id="${attraction.id}">${attraction.name}</li>`   
    }
    attractionsHTML = "</ol>"

    return attractionsHTML
};

export const Locations = () => {
    let locationsHTML = "<ol>";
    for (const location of locations) {
        locationsHTML += `<li data-id="${location.id}">${location.name}</li>`
        }
       locationsHTML += "</ol>"
        
return locationsHTML
};
