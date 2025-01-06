# Responsive Form with Validation

This project is a responsive registration form that includes real-time validation using JavaScript. It adapts to mobile, tablet, and desktop layouts, with a unique desktop feature that splits the screen into a left welcome section and a right form section. The form validates input fields for email, password strength, and password confirmation before submission.

---

🚀 **Features**

**Responsive Design:**

- 📱 Mobile-friendly layout.
- 💻 Tablet-optimized design.
- 🖥️ Desktop layout with a split-screen feature.

**Real-Time Validation:**

- Checks for valid email addresses.
- Enforces strong password rules.
- Ensures password confirmation matches the entered password.

**Error Handling:**

- Displays error messages for invalid inputs.
- Highlights valid inputs in real-time.

**Modern Styling:**

- Clean and intuitive design.
- Desktop view includes a left-side welcome section with a color-matched form button.

---

🖼️ **Screenshots**

**Mobile**

The form is centered and fully functional on smaller screens.

**Tablet**

The form adjusts to a wider layout.

**Desktop**

Split-screen design with a welcome message on the left and the form on the right.

---

📂 **File Structure**
responsive-form-validation/
│
├── index.html        # Main HTML file
├── style.css         # CSS file for styling
├── main.js           # JavaScript file for validation logic
└── README.md         # Project documentation

---

⚙️ **Technologies Used**

- **HTML**: For structuring the form and layout.
- **CSS**: For styling and responsive design.
- **JavaScript**: For input validation logic.

---

📦 **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/responsive-form-validation.git

Navigate to the project folder:
bash
cd responsive-form-validation
Open the index.html file in your browser.

🎯 Features in Detail

Validation

The form uses JavaScript to validate the following fields:

Email:
Ensures the field is not empty.
Validates email format using a regular expression.
Password:
Ensures the field is not empty.
Requires:
At least 8 characters.
One uppercase letter.
One lowercase letter.
One number.
One special character.
Confirm Password:
Ensures the field matches the entered password.

Key Functions

showError(input, message): Highlights the input field with an error message.
showSuccess(input): Highlights the input field as valid.
Validation Functions:
checkEmail(): Validates email input.
checkPassword(): Validates password strength.
checkConfirmPassword(): Checks if passwords match.
Event Listener: Prevents default form submission and runs validation functions.

📐 Responsive Design

Breakpoints

Mobile: Default layout (width below 768px).
Tablet: Starts at 768px width.
Desktop: Starts at 1024px width, with a left-side div containing a welcome message.

🛠️ How to Use

Open the index.html file in your browser.
Fill in the form fields:
Enter a valid email.
Create a password that meets the requirements.
Confirm the password.
Submit the form to trigger validation.
Fix errors if any are displayed.

🤝 Contribution

Contributions are welcome! If you want to improve this project:

Fork the repository.
Create a new branch:
bash
git checkout -b feature/your-feature
Commit your changes:
bash
git commit -m "Add your message here"
Push to the branch:
bash
git push origin feature/your-feature
Submit a pull request.

📜 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

✍️ Author

Developed by Yasin Coder (YasinCoder0x0). If you have any questions or suggestions, feel free to reach out.