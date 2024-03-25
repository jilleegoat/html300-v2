<template>
  <div>
    <h1>Search SBA Articles</h1>
    <form @submit.prevent="handleFormSubmit">
      <input type="text" v-model="searchTerm" placeholder="Enter search term" />
      <button type="submit">Search</button>
    </form>
    <div id="results">
      <div v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }}</p>
        <a :href="article.url" target="_blank">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      articles: []
    };
  },
  methods: {
    handleFormSubmit() {
  const localApiUrl = `http://localhost:3001/api/search?searchTerm=${encodeURIComponent(this.searchTerm)}`;

  fetch(localApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.articles = data.items || [];
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
}}
</script>
