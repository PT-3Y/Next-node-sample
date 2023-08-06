const axios = require('axios');

function makeRequestWithRetry(maxRetries, retryDelay, val) {
  let retryCount = 0;

  function executeRequest() {
    axios.get('https://example.com/api')
      .then(response => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        if (retryCount < maxRetries && error.code === 'ECONNABORTED') {
          // Retry the request if it was aborted due to a timeout
          retryCount++;
          console.log(`Attempt ${retryCount} - Timeout - Retrying in ${retryDelay}ms...`);
          setTimeout(executeRequest, retryDelay);
        } else {
          // Handle other types of errors or exceeded maximum retries
          console.error(error);
        }
      });
  }

  // Initial request
  executeRequest();
}

// Usage: Make the request with a maximum of 3 retries and a delay of 1000ms between retries
makeRequestWithRetry(3, 1000);