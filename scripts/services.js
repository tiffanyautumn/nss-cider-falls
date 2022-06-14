import { getServices } from "./database.js";

const services = getServices()

export const Services = () => {
    let serviceHTML = "<ul>"

    for (const service of services) {
        serviceHTML += `<li id="service--${service.id}">${service.name}</li>`
    }

    serviceHTML += "</ul>"
    return serviceHTML

}