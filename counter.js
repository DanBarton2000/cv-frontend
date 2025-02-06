const apiUrl = "https://73uugp9wsh.execute-api.eu-west-2.amazonaws.com/Counter";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("counter").innerText = data;
  })
  .catch(error => {
    console.error('Error:', error);
  });