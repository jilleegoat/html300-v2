<template>
  <div>
    <input v-model="address" placeholder="Enter address">
    <button @click="performGeocoding">Geocode</button>
    <div v-if="location">
      Latitude: {{ location.lat }}, Longitude: {{ location.lon }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      location: null
    };
  },
  methods: {
    performGeocoding() {
      this.$geocode(this.address)
        .then(location => {
          this.location = location;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
