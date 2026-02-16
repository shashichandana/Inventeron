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
            handleFirstSubmit();
        } else if (formStep === 2) {
            handleSecondSubmit();
        }
    });

    function handleFirstSubmit() {
        if (input1.value.trim() === '' || input2.value.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        captchaSection.classList.remove('hidden');
        generateCaptcha();
        formStep = 2;
        captchaInput.value = '';
        captchaInput.focus();
    }

    function handleSecondSubmit() {
        const userAnswer = captchaInput.value.trim();

        try {
            validateCaptcha(userAnswer);

            alert('Submitted successfully');
            form.reset();
            captchaSection.classList.add('hidden');
            formStep = 1;
        } catch (err) {
            if (err instanceof Error) {
                if (err.message === 'EMPTY') {
                    alert('Please answer the CAPTCHA');
                    return;
                }

                if (err.message === 'INVALID') {
                    alert('Invalid captcha');
                    captchaInput.value = '';
                    generateCaptcha();
                    captchaInput.focus();
                    return;
                }
            }

            console.error('Unexpected error during CAPTCHA validation:', err);
            alert('An unexpected error occurred. Please try again.');
        }
    }

    function validateCaptcha(userAnswer) {
        if (userAnswer === '') {
            throw new Error('EMPTY');
        }

        if (userAnswer !== captchaAnswer) {
            throw new Error('INVALID');
        }

        return true;
    }

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captchaText = '';
        for (let i = 0; i < 6; i++) {
            captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        captchaDisplay.textContent = captchaText;
        captchaAnswer = captchaText;
    }
});
