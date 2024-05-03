import { getAttractions } from "./database.js";

const attractions = getAttractions()

export const Attractions = () => {
    let html = "<ul>"

    for (const attraction of attractions) {
        html += `<li data-type="attraction">${attraction.name}</li>`
    }

    html += "</ul>"

    return html
}