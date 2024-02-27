// script.js
// Fetch JSON data from an API or another source
fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    // Once data is fetched, loop through it and create cards
    data.forEach(createCard);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


// Sample JSON data
const jsonData = [
    {
      "name": "John Doe",
      "title": "Web Developer",
      "linkedin": "https://www.linkedin.com/in/paolo",
      "company": "Web Weavers",
      "experience": "3 years",
      "school": "University of Washington",
      "major": "Marketing",
      "email": "paolo@example.com",
      "photo": "img/headshot.jpg"
    },
    // Add more data objects as needed
  ];
  
  // Function to create card components
  function createCard(data) {
    const cardContainer = document.getElementById('cards-container');
  
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    cardElement.innerHTML = `
      <div class="profile-container">
          <div class="profile-photo">
              <img src="${data.photo}" alt="Profile Photo"> 
          </div>
          <div class="profile-info">
              <h1>${data.name}</h1>
              <p>${data.title}</p>
              <a href="${data.linkedin}" class="linkedin">${data.linkedin}</a>
          </div>
      </div>
      <div class="profile-details">
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Experience:</strong> ${data.experience}</p>
          <p><strong>School:</strong> ${data.school}</p>
          <p><strong>Major:</strong> ${data.major}</p>
          <p><strong>Email:</strong> ${data.email}</p>
      </div>
    `;
  
    cardContainer.appendChild(cardElement);
  }
  
  // Loop through JSON data and create cards
  jsonData.forEach(createCard);
  