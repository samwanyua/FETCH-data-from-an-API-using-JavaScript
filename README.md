# Fetch Method in JavaScript

In JavaScript, the `fetch()` method is used to make network requests, typically to retrieve resources from a server. It is a modern replacement for the older `XMLHttpRequest` object and provides a more powerful and flexible way to handle HTTP requests.

Here is a basic example of how the `fetch()` method works:

```javascript
fetch(url)
  .then(response => {
    // Handle the response (e.g., check for errors, process data)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // or response.text(), response.blob(), etc., depending on the expected response type
  })
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors that occur during the fetch
    console.error('Fetch error:', error);
  });
