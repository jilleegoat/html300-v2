<template>
  <div>
    <input v-model="address" placeholder="Enter address">
    <button @click="performGeocoding">Geocode</button>
    <div v-if="location">
      Latitude: {{ location.lat }}, Longitude: {{ location.lon }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useGeocode from '../composables/useGeocode.js';

const address = ref('');
const location = ref(null);
const { geocode } = useGeocode();

async function performGeocoding() {
    try {
        const result = await geocode(address.value);
        location.value = result;
    } catch (error) {
        console.error('Geocoding error:', error);
    }
}
</script>
