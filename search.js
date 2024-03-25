document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    searchArticles(searchTerm);
});

function searchArticles(searchTerm) {
    const apiUrl = `https://sba.gov/api/content/search/articles.json?searchTerm=${encodeURIComponent(searchTerm)}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (data && data.items) {
        data.items.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            resultsDiv.appendChild(articleDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No articles found.</p>';
    }
}
