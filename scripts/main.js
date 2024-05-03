import { Guests } from "./guests.js"
import { Attractions } from "./attractions.js"
import { Services } from "./services.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="attractions">
    <sections class=>
    <h4>park services</h4>
    </sections>

    <section class="detail--column list attractions__attractions">
        <h2>Attractions</h2>
        ${Attractions()}
    </section>
    <section class="detail--column list attractions__services">
        <h2>Services</h2>
        ${Services()}
    </section>
</article>

<article class="guests">
        <h2>Current Guests</h2>
        ${Guests()}
</article>

`

mainContainer.innerHTML = applicationHTML

