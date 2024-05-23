// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Show the custom alert/modal dialog
    const alertElement = document.getElementById('custom-alert');
    alertElement.style.display = 'flex'; // Make the custom alert visible with flex layout
});

// Function to close the alert and reset the form
function closeAlert() {
    const alertElement = document.getElementById('custom-alert');
    alertElement.style.display = 'none'; // Hide the custom alert
    
    // Clear the form fields
    const form = document.getElementById('contact-form');
    form.reset(); // Reset all form fields to their default values
}

