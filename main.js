/* Getting email and password elements */
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

/* Function to show error message */
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
};

/* Function to show success */
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.style.visibility = "hidden";
};

/* Check email validity */
const checkEmail = () => {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError(email, "Email is required");
  } else if (!emailRegex.test(emailValue)) {
    showError(email, "Please enter a valid email address");
  } else {
    showSuccess(email);
  }
};

/* Check password validity */
const checkPassword = () => {
  const passwordValue = password.value;
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,}$/;

  if (passwordValue === "") {
    showError(password, "Password is required");
  } else if (!passwordRegex.test(passwordValue)) {
    showError(
      password,
      "Password must be at least 8 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character"
    );
  } else {
    showSuccess(password);
  }
};

/* Check confirm password validity */
const checkConfirmPassword = () => {
  if (confirmPassword.value === "") {
    showError(confirmPassword, "Confirm password is required");
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
  } else {
    showSuccess(confirmPassword);
  }
};

/* Form submission handling */
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default submit behavior
  checkEmail();
  checkPassword();
  checkConfirmPassword();
});