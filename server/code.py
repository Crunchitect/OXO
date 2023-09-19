import hashlib

accounts = []
players = []
maps = []

def make_account(username, passwd):
    h = hashlib.sha256()
    h.update(bytes(username, encoding="utf-8"))
    h.update(bytes(passwd, encoding="utf-8"))
    token = h.hexdigest()
    account = {
        "username": username,
        "token": token
    }
    accounts.append(account)
    return repr(account)


def get_account_from_token(token):
    return [account for account in accounts if account['token'] == token][0]