export default function useGeocode() {
    const geocode = async (address) => {
        const encodedAddress = encodeURIComponent(address);
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;

        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            return data[0];
        } else {
            throw new Error(`No results found for "${address}".`);
        }
    };

    return { geocode };
}
