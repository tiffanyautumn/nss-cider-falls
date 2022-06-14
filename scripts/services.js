import { getServices, getServicesInArea, getAreas } from "./database.js";

const services = getServices()
const inArea = getServicesInArea()
const areas = getAreas()

export const Services = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li id="service--${service.id}">${service.name}</li>`
    }

    serviceHTML += "</ul>"
    return serviceHTML

}

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("service")) {
            const [, serviceId] = itemClicked.id.split("--")
            let areasAvailable = ""
                
        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                areasAvailable = `${service.name} is available at the`
            }
        }
    
        for (const areaServices of inArea) {
            for (const service of areaServices.serviceId) {
                if (service === parseInt(serviceId)) {
                    for (const area of areas) {
                        if (area.id === areaServices.areaId) {
                            areasAvailable += ` ${area.name},`
                         }
                    } 
               
            }
        }
     
      }let availableAreasString = `${areasAvailable.slice(0,-1)} `
      window.alert(availableAreasString) 
      return availableAreasString
    }
    
})