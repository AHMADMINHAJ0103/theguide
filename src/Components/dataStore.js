// src/Components/JS/dataStore.js

// A simple in-memory data array (you can replace with backend later)
let submissions = [];

// Function to add a new form submission
export function addSubmission(data) {
  submissions.push({
    ...data,
    id: Date.now(),
  });
  console.log("✅ New submission added:", data);
}

// Function to get all stored submissions
export function getSubmissions() {
  return submissions;
}
