import { Guests } from "./guests.js"
import { Attractions } from "./attractions.js"
import { Services } from "./services.js"
import { Locations } from "./locations.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="attractions">
    <sections class="detail--column list attractions__services">
        <h2>Park Services</h2>
        ${Services()}
    </sections>
    <section class="detail--column list attractions__attractions">
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

