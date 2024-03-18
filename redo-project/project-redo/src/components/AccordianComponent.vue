<template>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header" :id="`heading${index}`">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${index}`"
          :aria-expanded="index === 0 ? 'true' : 'false'"
          :aria-controls="`collapse${index}`"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="`collapse${index}`"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        aria-labelledby="`heading${index}`"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/styles.scss';
.accordion-item {
  @include accordion-item-style;
}
</style>

