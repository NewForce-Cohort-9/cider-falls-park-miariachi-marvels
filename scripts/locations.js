import {getLocations, getGuests, getServices, getAttractions} from "./database.js"

const locations = getLocations()
const guests =getGuests()
const services = getServices()
const attractions = getAttractions()



export const Locations = () => {
    let locationsHTML = "<ol>";
    for (const location of locations) {
        locationsHTML += `<li data-id="${location.id}">${location.name}</li>`
        }
       locationsHTML += "</ol>"
        
return locationsHTML
};
