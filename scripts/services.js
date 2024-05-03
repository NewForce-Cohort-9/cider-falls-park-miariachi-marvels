import { getServices, getLocations } from "./database.js";

const services = getServices();
const locations = getLocations();

// Helper function to find parks by services
const findLocationsForService = (serviceName) => {
    const locationsWithService = locations.filter(
        location => location.services.includes(serviceName))
        .map(location => location.name);
    return locationsWithService.length > 0 ? locationsWithService : "No locations listed";
};

/* When a park guest clicks on one of the services, a message should be displayed 
   show which park areas support that service.
*/
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "service") {
        const serviceId = itemClicked.dataset.id;
        const serviceName = services.find(service => service.id === serviceId)?.name;
        if (serviceName) {
            const locations = findLocationsForService(serviceName);
            alert(`${serviceName} is available in ${locations}`);
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
};
