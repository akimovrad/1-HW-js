const urlInput = document.getElementById('urlInput');
const emailInput = document.getElementById('emailInput');

const urlRegex = /^(https?:\/\/)[^\s]+\.[^\s]+$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

urlInput.addEventListener('input', () => {
    if (urlRegex.test(urlInput.value)) {
        urlInput.classList.remove('invalid');
        urlInput.classList.add('valid');
    } else {
        urlInput.classList.remove('valid');
        urlInput.classList.add('invalid');
    }
});

emailInput.addEventListener('input', () => {
    if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }
});