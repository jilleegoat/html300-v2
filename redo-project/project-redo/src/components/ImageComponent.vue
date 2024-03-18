<template>
  <img
    :src="src"
    :alt="alt"
    :title="title"
    :class="{ 'bordered': isBordered }"
    @click="toggleBorder"
  />
</template>

<script>
import borderMixin from '../bordermixin';

export default {
  mixins: [borderMixin],
  props: {
    src: {
      type: String,
      alt: String,
    title: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isBordered: false
    };
  },
  methods: {
    toggleBorder() {
      this.isBordered = !this.isBordered;
    }
  }
};
</script>

<style>
.bordered {
  border: 2px solid black;
}
</style>../views/bordermixin