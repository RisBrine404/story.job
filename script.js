const correctPassword = 'aisarah';  // Password yang baru

function checkPassword() {
    const userInput = document.getElementById('password-input').value;
    if (userInput === correctPassword) {
        window.location.href = 'article.html';
    } else {
        alert('Incorrect password!');
    }
} 
