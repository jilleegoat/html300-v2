<template>
  <div>
    <h2>{{ data.title }}</h2>
    <p>{{ data.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
