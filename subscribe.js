function openModal() {
  document.getElementById('subscribeForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Function to hide the popup form
function closeModal() {
  document.getElementById('subscribeForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// Event listener to trigger the function when the button is clicked
document.getElementById('getMoreBtn').addEventListener('click', openModal);

// Event listener to close the form when the cancel button is clicked
document.getElementById('cancelBtn').addEventListener('click', closeModal);
// Function to show the popup form and overlay
function openModal() {
  document.getElementById('subscribeForm').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Function to hide the popup form and overlay
function closeModal() {
  document.getElementById('subscribeForm').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// Function to handle form submission and show the subscription message
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the form
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
      alert('Please fill in all fields.');
  } else {
      // Display subscription message
      alert('Thank you for subscribing, ' + name + '!');

      // Reset the form
      document.getElementById('subscribeForm').reset();

      // Close the popup form
      closeModal();
  }
}

// Event listener for form submission
document.getElementById('subscribeForm').addEventListener('submit', handleSubmit);

