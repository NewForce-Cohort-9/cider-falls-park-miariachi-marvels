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
    if (!service) {
        console.log(`No service found for: ${serviceName}`);
        return [];
    }

    const locationIds = locationServices
        .filter(ls => ls.serviceId === service.id)
        .map(ls => ls.locationId);

    const locationNames = locations
        .filter(location => locationIds.includes(location.id))
        .map(location => location.mainAttraction);

    console.log(`Locations for ${serviceName}:`, locationNames);
    return locationNames;
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML += Services(); // Append the services list to the body
    document.getElementById('services-list').addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'LI' && target.dataset.type === "service") {
            const serviceName = target.textContent;
            const supportingLocations = findLocationsForService(serviceName);
            if (supportingLocations.length > 0) {
                window.alert(`Locations offering ${serviceName}: ${supportingLocations.join(", ")}`);
            } else {
                window.alert(`No locations offer ${serviceName}`);
            }
        }
    });
});

export const Services = () => {
    let servicesHTML = "<ol id='services-list'>";
    for (const service of services) {
        servicesHTML += `<li data-type='service'>${service.name}</li>`;
    }
    servicesHTML += "</ol>";
    return servicesHTML;
};
