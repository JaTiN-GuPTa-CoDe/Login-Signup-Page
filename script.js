const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const fieldType = field.getAttribute('type');
    field.setAttribute('type', fieldType === 'password' ? 'text' : 'password');
}