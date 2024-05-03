import { getServices, getLocations } from "./database.js"

const services = getServices()
const locations = getLocations()

export const Services = () => {
    let servicesHTML = "<ol>";
    for (const service of services) {
        servicesHTML += `<li data-id="${service.id}">${service.name}</li>`
        }
        servicesHTML += "</ol>"
        return servicesHTML
};