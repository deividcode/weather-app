let menuHome = document.querySelector('.menu-mobile-home');
let menuSearch = document.querySelector('.menu-mobile-search');
let menuAbout = document.querySelector('.menu-mobile-about');

let mobileMenu = document.querySelector('.screen-mobile-menu');



console.log(mobileMenu);

// let tempHTML = document.querySelector(".temp");

// let formSearch = document.querySelector('.form-country');
// console.log(formSearch);

window.onload = () => {

    mobileMenu.addEventListener('click', () => {
        e.preventDefault();
        console.log(e);
        console.log(e.target);
    })

    // getLocation();
    // formSearch.addEventListener('submit', dataForm)    
}


// function getLocation() {    
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             console.log(position)
//             geolocationAPI(position.coords.latitude, position.coords.longitude);
//         });
//     } else {
//         console.log("La geolocalización no es compatible con este navegador.");
//     }
// }

// function geolocationAPI(latitude, longitude) {
    
//     fetch( "http://maps.googleapis.com/maps/api/geocode/json?latlng="+ `${latitude}` + "," + `${longitude}` +"&sensor=false")
//         .then(response => response.json())
//         .then(data => console.log(data))

    
// }



// function dataForm(e){
//     e.preventDefault();
    
//     const formData = new FormData(e.target);   

//     const country = formData.get('country');
//     weatherAPI(country);
//     console.log('Aqui');
// }


// function weatherAPI(country) {

//     const URL_BASE = 'http://api.weatherapi.com/v1/current.json?key=69399b41b3a341c0b8f221901232004';
    
//     fetch(`${URL_BASE}` + `&q=${country}` + "&aqi=no")
//         .then(response => response.json())   
//         .then(data => console.log(data))
//         // .then(data => mostrarData(data))       
    
    
//     // function mostrarData(data) {    
//     //     console.log(data);
//     //     tempHTML.textContent = data.temp_c;    
//     // }

// }
