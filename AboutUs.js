function toggleBio(bioId) {
    const bioElement = document.getElementById(bioId);

    // Check the current state to determine if the bio should be shown or hidden
    const isVisible = bioElement.style.display === 'block';

    // Smooth transition for toggling
    if (isVisible) {
        // Hide the bio section
        bioElement.style.transition = 'opacity 0.5s'; // Smooth fade-out
        bioElement.style.opacity = '0'; // Set opacity to zero
        setTimeout(() => {
            bioElement.style.display = 'none'; // After fading out, hide the section
        }, 500); // Delay matches the transition duration
    } else {
        // Show the bio section
        bioElement.style.display = 'block'; // Make it visible
        bioElement.style.transition = 'opacity 0.5s'; // Smooth fade-in
        setTimeout(() => {
            bioElement.style.opacity = '1'; // After a short delay, set full opacity
        }, 10); // Small delay to trigger the transition
    }
}

