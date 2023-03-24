


class SQL_OUT_Dependency:
    def sqlAuth(self, credentials):
        pass
    def query(query):
        pass

class SqlImplementation:
    def __init__(self, credentials):
        self.auth = SQL_OUT_Dependency(credentials).sqlAuth()
    
    def query(self,query_argument):
        self.auth.query(query_argument)
    

credentials = {
    'username': 'env.SQLUSER',
    'password': 'env.SQLPASS'
};

POST = {
    "login": 'login',
    "password": 'password'
};

SqlLogin = SqlImplementation(credentials)


user_login = POST['login']
user_password = POST['password']

sql_query_string = f'SELECT * FROM users WHERE username = "${user_login}" AND password = "${user_password}"';

login_attempt = SqlLogin.query(sql_query_string)

if(login_attempt):
    print(f'user ${user_login} has just logged')
else:
    print("Login failed")