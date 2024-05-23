document.getElementById('showFormButton').addEventListener('click', function() {
    // Create a new form element
    var form = document.createElement('form');
    form.setAttribute('id', 'classes-form');

    // Create input elements for student name
    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'student-name');
    nameLabel.textContent = 'Student Name:';
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'student-name');
    nameInput.setAttribute('name', 'student-name');
    nameInput.setAttribute('required', true);

    // Create select element for instrument
    var instrumentLabel = document.createElement('label');
    instrumentLabel.setAttribute('for', 'instrument');
    instrumentLabel.textContent = 'Instrument:';
    var instrumentSelect = document.createElement('select');
    instrumentSelect.setAttribute('id', 'instrument');
    instrumentSelect.setAttribute('name', 'instrument');
    instrumentSelect.setAttribute('required', true);
    var instruments = ['Guitar', 'Piano', 'Violin', 'Drums'];
    instruments.forEach(function(instrument) {
        var option = document.createElement('option');
        option.setAttribute('value', instrument.toLowerCase());
        option.textContent = instrument;
        instrumentSelect.appendChild(option);
    });

    // Create select element for experience
    var experienceLabel = document.createElement('label');
    experienceLabel.setAttribute('for', 'experience');
    experienceLabel.textContent = 'Experience Level:';
    var experienceSelect = document.createElement('select');
    experienceSelect.setAttribute('id', 'experience');
    experienceSelect.setAttribute('name', 'experience');
    experienceSelect.setAttribute('required', true);
    var experiences = ['Beginner', 'Intermediate', 'Advanced'];
    experiences.forEach(function(experience) {
        var option = document.createElement('option');
        option.setAttribute('value', experience.toLowerCase());
        option.textContent = experience;
        experienceSelect.appendChild(option);
    });

    // Create submit button
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.classList.add('btn-submit');
    submitButton.textContent = 'Submit';

    // Append all elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(instrumentLabel);
    form.appendChild(instrumentSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(experienceLabel);
    form.appendChild(experienceSelect);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Append the form to the container
    var formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Clear any existing content
    formContainer.appendChild(form);
    formContainer.classList.remove('hidden');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Form validation
        const studentName = document.getElementById('student-name').value.trim();
        const instrument = document.getElementById('instrument').value;
        const experience = document.getElementById('experience').value;

        let errorMessages = [];

        if (studentName === '') {
            errorMessages.push("Please enter your name.");
        }
        if (instrument === '') {
            errorMessages.push("Please select an instrument.");
        }
        if (experience === '') {
            errorMessages.push("Please select your experience level.");
        }

        // If there are validation errors, display an alert
        if (errorMessages.length > 0) {
            alert("Please correct the following errors:\n" + errorMessages.join("\n"));
            return; // Stop further processing
        }

        // Confirmation message for successful submission
        alert("Thank you for signing up! We'll contact you with further details.");

        // Optional: Reset the form to clear fields after submission
        form.reset();

        // Hide the form container to go back to the initial state
        formContainer.classList.add('hidden');
    });
});