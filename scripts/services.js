import { getServices, getAttractions, getLocationServices, getLocationAttractions } from "./database.js";

const services = getServices();
const attractions = getAttractions();
const locationServices = getLocationServices();
const locationAttractions = getLocationAttractions();

const findAttractionsForService = (serviceName) => {
    const service = services.find(service => service.name === serviceName);
    if (!service) return [];

    const locationsOfferingService = locationServices
        .filter(ls => ls.serviceId === service.id)
        .map(ls => ls.locationId);

    const attractionsOfferingService = locationAttractions
        .filter(la => locationsOfferingService.includes(la.locationId))
        .map(la => {
            const attraction = attractions.find(attraction => attraction.id === la.attractionId);
            return attraction ? attraction.name : undefined;
        })
        .filter(attractionName => attractionName !== undefined);
    
    return attractionsOfferingService;
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
