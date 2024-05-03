import { getServices, getAttractions, getLocationServices, getLocationAttractions } from "./database.js";

const services = getServices();
const attractions = getAttractions();
const locationServices = getLocationServices();
const locationAttractions = getLocationAttractions();

const findAttractionsForService = (serviceName) => {
    const service = services.find(service => service.name === serviceName);
    if (!service) return [];

    // Find location IDs where this service is offered.
    const locationIds = locationServices
        .filter(ls => ls.serviceId === service.id)
        .map(ls => ls.locationId);

    // Find attractions linked to these locations.
    const attractionIds = locationAttractions
        .filter(la => locationIds.includes(la.locationId))
        .map(la => la.attractionId);

    // Get unique attraction IDs to avoid duplicates.
    const uniqueAttractionIds = [...new Set(attractionIds)];

    // Map the unique attraction IDs to their names.
    return uniqueAttractionIds.map(id => {
        const attraction = attractions.find(attraction => attraction.id === id);
        return attraction ? attraction.name : undefined;
    }).filter(name => name); // Remove undefined entries if any.
};

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "service") {
        const serviceName = itemClicked.textContent;
        const foundAttractions = findAttractionsForService(serviceName);
        if (foundAttractions.length > 0) {
            window.alert(`Attractions offering ${serviceName}: ${foundAttractions.join(", ")}`);
        } else {
            window.alert(`No attractions offer ${serviceName}`);
        }
    }
});

export const Services = () => {
    let servicesHTML = "<ol>";
    for (const service of services) {
        servicesHTML += `<li data-type="service">${service.name}</li>`;
    }
    servicesHTML += "</ol>";
    return servicesHTML;
};
