export default {
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
  