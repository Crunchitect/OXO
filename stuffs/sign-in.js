document.querySelector('#submit').addEventListener('click', async () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const caution = document.querySelector('#caution');

    const hash = sha256(username + password);
    var account = '';
    try {
        const stuff = await fetch(`https://tictactie.pythonanywhere.com/signin/${hash}`)
        const text = await stuff.text()
        account = JSON.parse(text)
    } catch (e) {
        caution.innerText = `There's a problem, please try again (${e})`
        return;
    }

    if (account == -1) {
        caution.innerText = 'Username or Password is not coorect.'; 
        return;
    }
    
    localStorage.setItem('oxo-username', account.username);
    localStorage.setItem('oxo-token', account.token);
    location.replace('index.html');
});