import { getAreas } from "./database.js";

// import { adventures } from "./adventures.js";
// import { adventures2 } from "./adventures.js";
import { getServicesInArea } from "./database.js";
import { getServices } from "./database.js";

const areas = getAreas()
const servicesInArea = getServicesInArea()
const adventureServices = getServices()

//FN creates an array of the service IDs available in an area
export const adventures = (area) => {
    const servicesArray = []
    // for (const area of adventureAreas) {
        for (const services of servicesInArea) {
            if (services.areaId === area.id) {
                servicesArray.push(services.serviceId)
            }
        }return servicesArray

    } 

export const adventures2 = (servicesArray) => {
    let adventureHTML = "<ul class='servicesOffered'>"
    for (const service of adventureServices){
        for(const locationService of servicesArray) {
            for (const location of locationService) {
            if(location === service.id) {
                adventureHTML += `<li>${service.name}</li>`
                }
            }
        } 
    }adventureHTML += `</ul>`
    return adventureHTML
}


export const Areas = () => {
    let areaHTML = ""

    for (const area of areas) {
        const servicesAvailable = adventures(area)
        const servicesHTML = adventures2(servicesAvailable)
        areaHTML += `<div class="area-- "><h2 id="area--${area.id}">${area.name}</h2>
        <h3> Services Available</h3> ${servicesHTML}
        </div>`
    }

    areaHTML += ""
    return areaHTML

}
