import { getServices, getLocations, getLocationServices } from "./database.js";

const services = getServices();
const locations = getLocations();
const locationServices = getLocationServices();

// Function to find locations that support a given service name
const findLocationsForService = (serviceName) => {
    const service = services.find(service => service.name === serviceName);
    const locationIds = locationServices
        .filter(locationServices => locationServices.serviceId === service.id)
        .map(locationServices => locationServices.locationId);

    const locationNames = locations
        .filter(location => locationIds.includes(location.id))
        .map(location => location.mainAttraction);
    return locationNames;
};

document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI' && target.dataset.type === "service") {
            const serviceName = target.textContent;
            const supportingLocations = findLocationsForService(serviceName);
            window.alert(`Locations offering ${serviceName}: ${supportingLocations.join(", ")}`);}
    });

export const Services = () => {
    let servicesHTML = "<ol id='services-list'>";
    for (const service of services) {
        servicesHTML += `<li data-type='service'>${service.name}</li>`;
    }
    servicesHTML += "</ol>";
    return servicesHTML;
};
