<template>
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
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `https://sba.gov/api/content/search/articles.json?searchTerm=${encodeURIComponent(this.searchTerm)}`;
      const url = proxyUrl + apiUrl;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.articles = data.items || [];
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }
}
</script>

<style>
@import '../styles/styles.scss';
#searchForm {
  margin-bottom: 20px;
}

#results div {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}
</style>
