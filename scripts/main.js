import { Guests } from "./guests.js"
import { Attractions } from "./attractions.js"
import { Services } from "./services.js"
import { Locations } from "./locations.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <sections class="services">
        <p><strong>PARK SERVICES:</strong> ${Services()}</p>
    </sections>

    <section class="container">
    <section class="list__attractions">
        <h2 class="attraction-title">Attractions</h2>
        ${Attractions()}
    </section>

    <article class="guests">
        <h2 class="guest-title">Current Guests</h2>
        ${Guests()}
    </article>
    </section>
`

mainContainer.innerHTML = applicationHTML

