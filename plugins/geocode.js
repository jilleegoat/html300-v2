// plugins/geocode.js

// Define the geocode function
const geocode = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                return data[0]; // Assuming the first result is the desired one
            } else {
                throw new Error(`No results found for "${address}".`);
            }
        });
};

// Export the function directly
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('geocode', geocode);
});
