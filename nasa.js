// Define variables for HTML elements
const dateInput = document.getElementById('dateSearch');
const title = document.getElementById('title');
const description = document.getElementById('description');
const spacePic = document.getElementById('spacePic');

// Define function to fetch data from APOD API
function fetchAPODData(date) {
  const apiKey = 'XnBKf2g3URfZ6hkYrujOVR0C4XnMPVhfujWtuCa3'; // Replace with your own API key
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update HTML elements with data
      title.textContent = data.title;
      description.textContent = data.explanation;
      spacePic.src = data.url;
      spacePic.alt = data.title;
    })
    .catch(error => console.error(error));
}

// Define function to handle button click
function call() {
  const date = dateInput.value;
  fetchAPODData(date);
}
