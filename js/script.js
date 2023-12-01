
if (typeof countries === 'undefined') {
    console.error('Countries array is not defined. Check if countries.js is correctly loaded.');
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const termsOfService = document.getElementById('termsOfService');
        const countrySelect = document.getElementById('countrySelect');
        const submitButton = document.getElementById('submitButton');
        const message = document.getElementById('message');

        
        const populateCountries = () => {
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        };

const checkConditions = () => {
    const isUsernameValid = username.value.trim() !== '';
    const isPasswordValid = password.value.length >= 12;
    const isPasswordConfirmed = confirmPassword.value === password.value;
    const isTermsAccepted = termsOfService.checked;
    const isCountrySelected = countrySelect.value !== '';

    submitButton.disabled = !(isUsernameValid && isPasswordValid && isPasswordConfirmed && isTermsAccepted && isCountrySelected);
};



        
        [username, password, confirmPassword, termsOfService, countrySelect].forEach(element => {
            element.addEventListener('input', checkConditions);
        });

        
        populateCountries();
        checkConditions();

        
        document.getElementById('registrationForm').addEventListener('submit', (event) => {
            event.preventDefault();
            message.textContent = `Welcome, ${username.value}! Your country code is: ${countrySelect.value}`;
        });
    });
}
