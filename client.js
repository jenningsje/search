document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const searchQuery = document.getElementById('searchInput').value;

  // Make a POST request to the backend with the search query
  fetch("http://localhost:3000/search", {
    method: "POST",
    body: JSON.stringify({ query: searchQuery }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Search results:', data);
      // Handle the search results, e.g., display them on the page
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
