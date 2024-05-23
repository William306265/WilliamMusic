document.getElementById('music-form').addEventListener('submit', function(event) {
    const title = document.getElementById('title').value.trim();
    const artist = document.getElementById('artist').value.trim();
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;

    let errorMessages = [];

    // Validate required fields
    if (title === '') {
        errorMessages.push("Song title is required.");
    }
    if (artist === '') {
        errorMessages.push("Artist name is required.");
    }

    // Validate genre selection
    if (genre === '') {
        errorMessages.push("Please select a genre.");
    }

    // Validate year range
    if (year && (year < 1900 || year > new Date().getFullYear())) {
        errorMessages.push("Please enter a valid release year.");
    }

    // If there are errors, prevent form submission and display an alert
    if (errorMessages.length > 0) {
        event.preventDefault(); // Prevent form submission
        alert("Form submission failed:\n" + errorMessages.join("\n"));
    } else {
        alert("Song added successfully!"); // Success message
    }
});
