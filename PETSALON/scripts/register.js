//object literal

let petSalon = {
    name:"The Fashion Pet",
    address:{
        country:"Mexico",
        city:"Tijuana",
        zip:"23456"
    },
    phone:"6659987311",
    pet:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Pooter",
            age:28,
            gender:"Male",
            service:"Grooming"
        }
    ]
}
document.getElementById("info").innerHTML=`
    <p> Welcome to ${petSalon.name} </p>
    <p> Located in ${petSalon.address.city} and ${petSalon.address.country} zip code ${petSalon.address.zip} </p>

    <p> name: ${petSalon.pet[0].name}</p>
    <p> name: ${petSalon.pet[1].name}</p>
    `;
