document.getElementById('edit-application-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cnicNumber = document.getElementById('cnic-number').value;
    const applicationNumber = document.getElementById('application-number').value;
    const editTokenNumber = document.getElementById('edit-token-number').value;
    
    if (cnicNumber && applicationNumber && editTokenNumber) {
        alert('Form submitted successfully!');
        // Here, you can add code to handle form submission, such as sending the data to a server
    } else {
        alert('Please fill in all the required fields.');
    }
});
