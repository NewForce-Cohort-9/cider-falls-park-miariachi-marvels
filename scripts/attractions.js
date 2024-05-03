import { getServices, getLocations, getAttractions, getGuests } from "./database.js"

const services = getServices()
const locations = getLocations()
const attractions = getAttractions()
const guests = getGuests()


const attractionGuests = (id) => {
    let guestsPresent = 0;
    for (const attraction of attractions) {
        if (attraction.locationId === id){
            guestsPresent++;
    }
    }
    return guestsPresent;
}


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "attraction") {
        const attractionId = parseInt(itemClicked.dataset.id);
        const guestsCount = attractionGuests(attractionId);
        window.alert(`Number of guests visiting this attraction: ${guestsCount}`);
    }
});


export const Attractions = () => {
    let attractionsHTML = "<ol>";
    for (const attraction of attractions) {
        attractionsHTML += `<li data-id="${attraction.id}">${attraction.name}</li>`
        }
        attractionsHTML += "</ol>"
        return attractionsHTML
};


