document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var eventSelect = document.getElementById('event').value;

            if (!name || !email || !phone || !eventSelect) {
                document.getElementById('errorMessage').textContent = 'Please fill out all required fields.';
            } else {
                document.getElementById('errorMessage').textContent = '';
                alert('Registration successful!\n\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nEvent: ' + eventSelect);
                document.getElementById('registrationForm').reset();
            }
        });