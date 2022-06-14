import { Services } from "./services.js" 
import { Areas } from "./area.js"
import { Guests } from "./guest.js"
import { getAreas } from "./database.js"
import { getGuests } from "./database.js"

const guests= getGuests()
const areas= getAreas()

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<header>
<h1>Cider Falls State Park</h1>
</header>
<article class="details">
    <div class= "leftandright">
    <section class="Areas">
        <h2>Areas of the Park</h2>
        <div id= "Areas">
        ${Areas()}
        </div>
    </section>
    <section class="guests">
        <aside>
        <h2>Current Guests</h2>
        ${Guests()}
        </aside>        
    </section>
    </div>
    <section class="detail--column list details__cities">
        ${Services()}
        
    </section>
</article>

<article class="assignments">
    
    
</article>
`

mainContainer.innerHTML = applicationHTML

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("area")) {
            const [, areaId] = itemClicked.id.split("--")

    let numOfGuests = 0
    // for (const area of areas ) {
        for (const guest of guests) {
            if (guest.areaId === parseInt(areaId)) {
                numOfGuests = numOfGuests + 1
            }
        }window.alert(numOfGuests) 
        return numOfGuests
    // }
        

    }
})


