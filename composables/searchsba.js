document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('searchTerm').value;
            searchArticles(searchTerm);
        });
    } else {
        console.error('Search form not found');
    }
});

function searchArticles(searchTerm) {
    // Function implementation
}

function displayResults(data) {
    // Function implementation
}
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