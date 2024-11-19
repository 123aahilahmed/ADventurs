// Listen for form submission
orderForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from reloading the page

    // Show overlay with loading spinner
    overlay.style.display = 'flex';

    // Simulate a delay (e.g., payment processing) before redirecting
    setTimeout(function() {
        // Gather form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            quantity: quantityInput.value,
            totalAmount: totalInput.value
        };

        // Store form data in sessionStorage
        sessionStorage.setItem('orderDetails', JSON.stringify(formData));

        // Redirect to the order confirmation page (update the URL)
        window.location.href = "eorder-confirmation.html"; // Change to your confirmation page URL
    }, 2000); // Simulate 2 seconds delay for processing
});
