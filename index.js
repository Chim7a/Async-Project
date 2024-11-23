// iterateWithAsyncAwait function
async function iterateWithAsyncAwait(values) {
  try {
    // Use map to create an array of promises for each log operation
    await Promise.all(
      values.map(async (value, index) => {
        // Introduce a delay of 1 second between logs
        await new Promise((resolve) => setTimeout(resolve, 1000 * index));

        // Log the current value
        console.log(value);
      })
    );
  } catch (error) {
    console.error("Error during iteration:", error);
  }
}

// Example usage:
const values = ["apple", "banana", "cherry", "date"];
iterateWithAsyncAwait(values);

// Simulate an API call using a Promise and setTimeout
async function awaitCall() {
  try {
    const loader = console.log("Fetching data...");

    // Simulate an API call with a delay of 2 seconds
    const data = await new Promise((resolve, reject) => {
      setTimeout(async () => {
        const apiResponse = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        // Simulate success response
        resolve(apiResponse.json());

        // You could also simulate an error like this:
        // reject(new Error('Failed to fetch data'));
      }, 1000);
    });

    // Log the fetched data after waiting for the API call to resolve
    console.log("API Response:", data);
  } catch (error) {
    // Catch and log any error that occurs during the API call
    console.error("Error:", error.message);
  } finally {
    loader = console.log("loaded");
  }
}

// Call the function to test it
awaitCall();

// haining Async/Await: Write a function chainedAsyncFunctions

async function asyncFunctionOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function One completed!");
      resolve();
    }, 1000);
  });
}

async function asyncFunctionTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function Two completed!");
      resolve();
    }, 1000);
  });
}

async function asyncFunctionThree() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function Three completed!");
      resolve();
    }, 1000);
  });
}

async function chainedAsyncFunctions() {
  try {
    // Chain the functions one after another using await
    await asyncFunctionOne();
    await asyncFunctionTwo();
    await asyncFunctionThree();
  } catch (error) {
    console.error("Error in chained async functions:", error);
  }
}

// Call the function to demonstrate the chaining of async functions
chainedAsyncFunctions();

// Concurrent Requests with Promise.all()
async function concurrentRequests() {
  try {
    // Simulate two asynchronous API requests with setTimeout
    const apiCallOne = new Promise((resolve) => {
      setTimeout(async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        resolve(data.json());
      }, 2000); // Resolve after 2 seconds
    });

    const apiCallTwo = new Promise((resolve) => {
      setTimeout(async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/photos");
        resolve(data.json());
      }, 3000); // Resolve after 3 seconds
    });

    // Wait for both API calls to resolve concurrently using Promise.all()
    const results = await Promise.all([apiCallOne, apiCallTwo]);

    // Log the combined results
    console.log("Combined Results:", results); // ['Data from API 1', 'Data from API 2']
  } catch (error) {
    // Handle any errors that may occur
    console.error("Error with one of the API calls:", error);
  }
}

// Call the function to demonstrate the behavior
concurrentRequests();

// Parallel Calls Using Promise.all()

async function parallelCalls(urls) {
  try {
    // Create an array of promises for each URL using the fetch API
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => response.json())
    );

    // Wait for all fetch calls to complete using Promise.all
    const responses = await Promise.all(fetchPromises);

    // Log the responses once all requests have resolved
    console.log("All responses:", responses);
  } catch (error) {
    // Handle errors (e.g., if any fetch fails)
    console.error("Error fetching data:", error);
  }
}

// Example URLs to fetch data from
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1", // Example API 1
  "https://jsonplaceholder.typicode.com/todos/2", // Example API 2
  "https://jsonplaceholder.typicode.com/todos/3", // Example API 3
];

// Call the parallelCalls function with an array of URLs
parallelCalls(urls);
