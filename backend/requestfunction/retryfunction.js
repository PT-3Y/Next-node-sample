const axios = require('axios');
const axiosRetry = require('axios-retry');

// Create an axios instance
const apiClient = axios.create();

// Attach the retry functionality to the axios instance
axiosRetry(apiClient, {
  retries: 3, // Number of retries
  retryDelay: (retryCount) => {
    // Custom retry delay logic (optional)
    return retryCount * 1000; // Increase delay with each retry (in milliseconds)
  },
  retryCondition: (error) => {
    // Custom retry condition logic (optional)
    return axiosRetry.isRetryableError(error) || axiosRetry.isNetworkError(error)||axios.isAxiosError(error); // Retry on network errors or certain status codes
  },
});

module.exports = apiClient;