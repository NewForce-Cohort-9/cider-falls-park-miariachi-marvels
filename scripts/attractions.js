import { getServices, getLocations, getAttractions, getGuests } from "./database.js"

const services = getServices()
const locations = getLocations()
const attractions = getAttractions()
const guests = getGuests()


const attractionGuests = (id) => {
    let guestsPresent = 0;
    for (const guest of guests) {
        if (guest.locationId === id){
            guestsPresent++;
    }
    }
    return guestsPresent;
}


document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;

    if (itemClicked.dataset.type === "mainAttraction") {
        const attractionId = parseInt(itemClicked.dataset.id);
        const guestsCount = attractionGuests(attractionId);
        window.alert(`Number of guests visiting this attraction: ${guestsCount}`);
    }
});


export const Attractions = () => {
    let attractionsHTML = "<ol class=`attractions-list`>"
    for (const location of locations) {
        attractionsHTML += `<div class="attraction-card">
        <li class="attraction-image"><img src="${location.image}"</li>
        <li data-type="mainAttraction"
        data-id="${location.id}"
        >${location.mainAttraction}</li></div>`
        }
        attractionsHTML += "</ol>"
        return attractionsHTML
};


