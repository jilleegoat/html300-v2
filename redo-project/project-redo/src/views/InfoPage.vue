<template>
  <div class="about">
    <Accordion :items="items" />
  </div>
</template>

<script>
import Accordion from '../components/AccordianComponent.vue'; 

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      items: [
        { title: 'Navigating the Dynamic World of Advertising: Leveraging Free Resources to Amplify Your Brand', content: 'This is the first item\'s accordion body.' },
        { title: 'Embrace the Power of Social Media', content: 'This is the second item\'s accordion body.' },
        { title: 'Strategies for Maximizing Visibility on Free Platforms', content: 'This is the third item\'s accordion body.' }
      ],
    };
  },
};
</script>
