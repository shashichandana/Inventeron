document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multiStepForm');
    const captchaSection = document.getElementById('captchaSection');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const captchaInput = document.getElementById('captcha');
    const captchaDisplay = document.getElementById('captchaDisplay');
    
    let formStep = 1;
    let captchaAnswer = null;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (formStep === 1) {
            // First submit - show CAPTCHA and third input field
            handleFirstSubmit();
        } else if (formStep === 2) {
            // Second submit - validate CAPTCHA
            handleSecondSubmit();
        }
    });

    function handleFirstSubmit() {
        // Validate first two fields
        if (input1.value.trim() === '' || input2.value.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Show CAPTCHA section
        captchaSection.classList.remove('hidden');
        
        // Generate CAPTCHA
        generateCaptcha();
        
        // Update form step
        formStep = 2;
        
        // Clear CAPTCHA input and focus on it
        captchaInput.value = '';
        captchaInput.focus();
    }

    function handleSecondSubmit() {
        // Validate CAPTCHA
        const userAnswer = captchaInput.value.trim();
        
        if (userAnswer === '') {
            alert('Please answer the CAPTCHA');
            return;
        }

        if (userAnswer === captchaAnswer) {
            alert('Submitted successfully');
            // Reset form if needed
            form.reset();
            captchaSection.classList.add('hidden');
            formStep = 1;
        } else {
            alert('Invalid captcha');
            // Clear CAPTCHA input and generate new one
            captchaInput.value = '';
            generateCaptcha();
            captchaInput.focus();
        }
    }

    function generateCaptcha() {
        // Generate random string of letters and digits
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captchaText = '';
        
        // Generate 6 random characters
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        // Display CAPTCHA
        captchaDisplay.textContent = captchaText;
        captchaAnswer = captchaText;
    }
});
