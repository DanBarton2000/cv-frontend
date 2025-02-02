const apiUrl = "https://ibsfvxx7o1.execute-api.eu-west-2.amazonaws.com/";

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