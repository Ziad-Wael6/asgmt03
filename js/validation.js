document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); 

  let isValid = true;

  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const age = document.getElementById('age').value.trim();

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Password
  if (password === '') {
    document.getElementById('passwordError').textContent = 'Password is required.';
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
    isValid = false;
  }

  // Validate Confirm Password
  if (confirmPassword === '') {
    document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    isValid = false;
  }

  // Validate Age
  if (age === '') {
    document.getElementById('ageError').textContent = 'Age is required.';
    isValid = false;
  } else if (isNaN(age) || parseInt(age) <= 0) {
    document.getElementById('ageError').textContent = 'Please enter a valid age.';
    isValid = false;
  }

  // Submit 
  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});