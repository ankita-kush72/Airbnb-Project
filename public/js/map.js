
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 8, // starting zoom
});
    
const marker = new mapboxgl.Marker({color: 'red'})
    .setLngLat(listing.geometry.coordinates)  // Listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({offset: 25}).setHTML(
            `<h3>${listing.title}</h3><p>Exact Location will be provided after booking</p>`
        )
    )
    .addTo(map);

// const marker = new mapboxgl.Marker({color: "red"})
//     .setLanLat(coordinates)
//     .addTo(map);