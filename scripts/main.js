import { Guests } from "./guests.js"
import { Attractions } from "./attractions.js"
import { Services } from "./services.js"
import { Locations } from "./locations.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
 <sections class="services">
        <p>Park Services: ${Services()}</p>
        
    </sections>
    <article class="attractions">
    <section class="list__attractions">
        <h2>Attractions</h2>
        ${Attractions()}
    </section>

</article>

<article class="guests">
        <h2>Current Guests</h2>
        ${Guests()}
</article>

`

mainContainer.innerHTML = applicationHTML

