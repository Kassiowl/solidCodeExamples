from abc import ABC, abstractmethod
from SQL_OUT_DEPENDENCY import SQL_OUT_Dependency
from RecoverHash import RecoverHash

#Interface Definition
class LoginDataBaseInterface(ABC):
    @abstractmethod
    def auth(credentials):
        pass
    @abstractmethod
    def user_login(self, query_argument):
        pass



#Interface Implementation, can be replaced easily with another class that implements at least auth and query method
class SQLConnect(LoginDataBaseInterface):
    def __init__(self, credentials):
        self.auth = SQL_OUT_Dependency().sqlAuth(credentials)
    
    def user_login(self,query_argument):
        return self.auth.query(query_argument)



#Use Case Login, we can use any database dependency here that follow "Database Interface"
class loginUserCase():
    
    def __init__(self,DbConnect: LoginDataBaseInterface,login,password):
        self.login = login
        self.password = password
        self.DbConnect = DbConnect

    def run(self):
        credentials_hash = RecoverHash(self.login, self.password)
        return self.DbConnect().query(credentials_hash)



credentials = {
    'username': 'env.SQLUSER',
    'password': 'env.SQLPASS'
};

POST = {
    "login": 'login',
    "password": 'password'
};


user_login = POST['login']
user_password = POST['password']

sql_query_string = f'SELECT * FROM users WHERE username = "${user_login}" AND password = "${user_password}"';

login = loginUserCase(SQL_OUT_Dependency).run()


if(login):
    print(f'user ${user_login} has just logged')
else:
    print("Login failed")