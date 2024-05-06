import { getServices, getLocations, getLocationServices } from "./database.js";

const services = getServices();
const locations = getLocations();
const locationServices = getLocationServices();

console.log('Services:', services);
console.log('Locations:', locations);
console.log('Location Services:', locationServices);

// Function to find locations that support a given service name
const findLocationsForService = (serviceName) => {
    const service = services.find(s => s.name === serviceName);
    const locationIds = locationServices
        .filter(ls => ls.serviceId === service.id)
        .map(ls => ls.locationId);

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
