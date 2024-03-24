export default (context, inject) => {
    const geocode = (address) => {
        const encodedAddress = encodeURIComponent(address);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;

        return fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    return data[0];  // Return the first result
                } else {
                    throw new Error(`No results found for "${address}".`);
                }
            });
    };

    // Inject the geocode function into the Vue instance and context
    inject('geocode', geocode);
};
