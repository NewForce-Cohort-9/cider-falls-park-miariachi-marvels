import { getLocations, getLocationServices, getServices } from "./database.js";

const locations = getLocations();
const locationServices = getLocationServices();
const services = getServices();

// Helper function to find parks by services
const findLocationsForService = (serviceName) => {
    const service = services.find(service => service.name === serviceName);
    const locationsWithService = locationServices.filter(ls => ls.serviceId === service.id)
        .map(ls => {
            const location = locations.find(location => location.id === ls.locationId);
            return location ? location.name : null;
        }).filter(name => name !== null);

    return locationsWithService.length > 0 ? locationsWithService.join(", ") : "No locations listed";
};

/* When a park guest clicks on one of the services, a message should be displayed 
   show which park areas support that service.
*/
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "service") {
        const serviceId = itemClicked.dataset.id;
        const service = services.find(service => service.id === serviceId);
        if (service) {
            const locations = findLocationsForService(service.name);
            alert(`Locations with ${service.name}: ${locations}`);
        }
    }
});


export const Services = () => {
    let servicesHTML = "<ol>";
    services.forEach(service => {
        servicesHTML += `<li data-type="service" data-id="${service.id}">${service.name}</li>`;
    });
    servicesHTML += "</ol>";
    return servicesHTML;
}