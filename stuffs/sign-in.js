document.querySelector('#submit').addEventListener('click', async () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const caution = document.querySelector('#caution');

    const hash = sha256(username + password);
    var account = '';
    try {
        account = JSON.parse(
            await (await fetch(`https://tictactie.pythonanywhere.com/signin/${hash}`)).text()
        );
    } catch (err) {
        caution.innerText = 'There\'s a problem on our end, please try again.';
        return;
    }

    if (account == -1) {caution.innerText = 'Username or Password is not coorect.'; return;}
    localStorage.setItem('oxo-username', account.username);
    localStorage.setItem('oxo-token', account.token);
    location.replace('index.html');
});