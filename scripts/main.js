import { Locations } from "./locations.js"
import { Guests } from "./guests.js"
import { Attractions } from "./attractions.js"
import { Services } from "./services.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="attractions">
    <section class="detail--column list attractions__locations">
        <h2>Locations</h2>
        ${Locations()}
    </section>
    <section class="detail--column list attractions__attractions">
        <h2>Attractions</h2>
        ${Attractions()}
    </section>
    <section class="detail--column list attractions__services">
        <h2>Services</h2>
        ${Services()}
    </section>
</article>

<article>

</article>

`

mainContainer.innerHTML = applicationHTML

// {/* <section class="detail--column list details__guests">
// <h2>Guests</h2>
// ${Guests()}
// </section> */}