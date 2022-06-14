import { getGuests } from "./database.js";

const guests = getGuests()

export const Guests = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li id="guest--${guest.id}">${guest.name}</li>`
    }

    guestHTML += "</ul>"
    return guestHTML

}

