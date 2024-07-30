document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loanForm");
    const sections = Array.from(form.getElementsByClassName("form-section"));
    const nextButtons = Array.from(form.getElementsByClassName("next-button"));
    const prevButtons = Array.from(form.getElementsByClassName("prev-button"));
    const progressBar = document.getElementById("progressBar");
    let currentSectionIndex = 0;

    // Initialize the form
    showSection(currentSectionIndex);

    // Event listeners for next buttons
    nextButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (validateForm(currentSectionIndex)) {
                currentSectionIndex++;
                showSection(currentSectionIndex);
                updateProgress(currentSectionIndex);
            }
        });
    });

    // Event listeners for previous buttons
    prevButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentSectionIndex--;
            showSection(currentSectionIndex);
            updateProgress(currentSectionIndex);
        });
    });

    // Function to show/hide form sections
    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("current");
            } else {
                section.classList.remove("current");
            }
        });
    }

    // Function to update progress bar
    function updateProgress(index) {
        const progress = ((index + 1) / sections.length) * 100;
        progressBar.value = progress;
    }

    // Function to validate form fields
    function validateForm(index) {
        const fields = Array.from(sections[index].getElementsByTagName("input"));
        let isValid = true;

        fields.forEach(field => {
            if (!field.checkValidity()) {
                field.reportValidity();
                isValid = false;
            }
        });

        return isValid;
    }
});

//Test Form handling
// document.getElementById('loanForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const formData = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         // Populate other form fields similarly
//     };
//     console.log(formData);

//     try {
//         const response = await fetch('/personal_loan/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         const responseData = await response.json();
//         console.log('Server response:', responseData);
//     } catch (error) {
//         console.error('Error submitting form:', error);
//     }
// });

// document.getElementById('loanForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     formData.append('campaignId', '286502');
//     formData.append('campaignKey', 'a912a1f7-fd4e-4243-bc97-46a0acfa571c');
//     formData.append('client_ip', '47.34.184.162');
//     formData.append('lead_type_id', '1');

//     // Fetch to your server endpoint to store data in your database
//     fetch('/personal_loan/submit', {
//         method: 'POST',
//         body: formData, // Send formData directly, it will handle multipart/form-data
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Error submitting loan application to server');
//         }
//         return response.json();
//     })
//     .then(serverResponse => {
//         // Handle server response if needed
//         console.log('Server response:', serverResponse);

//         // Now fetch to external API
//         return fetch('https://api.leadsmarket.com/post/data.aspx', {
//             method: 'POST',
//             body: JSON.stringify(Object.fromEntries(formData)), // Convert FormData to plain object
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer a912a1f7-fd4e-4243-bc97-46a0acfa571c',
//             },
//         });
//     })
//     .then(apiResponse => {
//         if (!apiResponse.ok) {
//             throw new Error('Error submitting loan application to external API');
//         }
//         return apiResponse.json();
//     })
//     .then(apiData => {
//         // Handle API response if needed
//         console.log('API response:', apiData);
//         alert('Loan application submitted successfully!');
//         // Reset form or redirect user
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again later.');
//     });
// });








    // fetch('/submit-loan-application', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({test: 'data'}),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));


// // Function to handle form submission
// function submitForm(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Perform basic validation
//     let form = document.getElementById('loanRequestForm');
//     let isValid = form.checkValidity();

//     if (isValid) {
//         // Prepare data to send (e.g., serialize form data)
//         let formData = new FormData(form);

//         // Convert FormData to JSON
//         let jsonObject = {};
//         formData.forEach((value, key) => {
//             jsonObject[key] = value;
//         });
//         let jsonString = JSON.stringify(jsonObject);

//         // You can process formData further or send it to an API
//         console.log('Form data:', formData);

//         // Example: Sending form data to an API (replace with your actual API endpoint)
//         fetch('https://your-api-endpoint.com', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             // body: formData
//             body: jsonString
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json(); // Assuming response is JSON
//         })
//         .then(data => {
//             console.log('API response:', data);
//             // Handle success or further processing
//             alert('Form submitted successfully!');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             // Handle error scenarios
//             alert('There was an error submitting the form. Please try again.');
//         });
//     } else {
//         // Form is not valid, handle validation errors
//         alert('Please fill out all required fields correctly.');
//     }
// }

// // Event listener for form submission
// let form = document.getElementById('loanRequestForm');
// form.addEventListener('submit', submitForm);
