//module for the array and allows for exports of copies of arrays

const database = { //object of arrays of objects lol
    areas: [{
        id: 1,
        name: "Lodge" ,

    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",

    }, {
        id: 3,
        name: "Chamfort River",

    }, {
        id: 4,
        name: "Gander River" ,

    }, {
        id: 5,
        name: "Campgrounds" ,

    }, {
        id: 6,
        name: "Pinebluff Trail",

    }],

    services: [{
        id: 1 ,
        name: "Lodging" ,

    }, {
        id: 2,
        name: "Parking",

    }, {
        id: 3,
        name: "Information",

    }, {
        id: 4 ,
        name: "Picnicking",

    }, {
        id: 5,
        name: "Hiking",

    }, {
        id: 6,
        name: "Rock Climbing",

    }, {
        id: 7,
        name: "Rafting",

    }, {
        id: 8,
        name: "Canoeing",

    }, {
        id: 9,
        name: "Fishing",

    }, {
        id: 10,
        name: "Ziplines",

    }], 

    guests: [{
        id: 1,
        name: "David R.",
        areaId: 1
        
    }, {
        id: 2,
        name: "Jennifer W.",
        areaId: 1 

    }, {
        id: 3,
        name: "Rachel M." ,
        areaId: 3

    }, {
        id: 4,
        name:"Sammi S." ,
        areaId:  4

    }, {
        id: 5,
        name: "Lucas M." ,
        areaId:  5

    }, {
        id: 6,
        name: "Wesley S.",
        areaId:  6

    }, {
        id: 7,
        name: "Colt O.",
        areaId:  7

    }],
    
    servicesInArea: [{
        areaId: 1,
        serviceId: [1,2,3,4],
    }, {
        areaId: 2,
        serviceId: [5,4,6],
    }, {
        areaId: 3,
        serviceId: [7,8,9],
    }, {
        areaId: 4,
        serviceId: [9,5],
    }, {
        areaId: 5,
        serviceId: [3,1,2],
    }, {
        areaId: 6,
        serviceId: [5,4,10],
    }] 
    

}

//exports

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServicesInArea = () => {
    return database.servicesInArea.map(serviceInArea => ({...serviceInArea}))
}