function isAlphaNumeric(str) {
    return str.match(/^[a-z0-9_]+$/i) !== null;
}

document.querySelector('#submit').addEventListener('click', async () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const repassword = document.querySelector('#password-v2').value;
    const caution = document.querySelector('#caution');

    if (username == '') {caution.innerText = 'Username cannot be empty.'; return;};
    if (!isAlphaNumeric(username)) {caution.innerText = 'Username can only be alphanumeric and underscores.'; return;};
    if (password == '') {caution.innerText = 'Password cannot be empty.'; return;};
    if (!isAlphaNumeric(password)) {caution.innerText = 'Password can only be alphanumeric and underscores.'; return;};
    if (repassword == '') {caution.innerText = 'Please re-enter your password.'; return;};
    if (password != repassword) {caution.innerText = 'Password and Confirmation must match.'; return;};
    var usernames;
    try {
        usernames = JSON.parse(
            await (await fetch('https://tictactie.pythonanywhere.com/accounts')).text()
        );
    } catch (err) {
        caution.innerText = 'There\'s a problem on our end, please try again.';
        return;
    } 
    if (usernames.includes(username)) {caution.innerText = 'This username is taken.'; return;}
    const account = JSON.parse(
        await (await fetch(`https://tictactie.pythonanywhere.com/signup/${username}/${password}`)).text()
    );
    localStorage.setItem('oxo-username', account.username);
    localStorage.setItem('oxo-token', account.token);
    
    location.replace('index.html')
});