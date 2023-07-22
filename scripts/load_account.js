const account = localStorage.getItem('account');

if (!account) {
    location.replace('sign-up.html');
}