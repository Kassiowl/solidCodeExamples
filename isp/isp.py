from abc import ABC, abstractmethod
from ast import List


#Keyboard driver def
class Keyboard_Driver:

    def __init__(self, driver_dependencies: List[str]):
        pass


#interface DEF
class KeyboardInterface(ABC):

    @abstractmethod
    def __init__(self, name: str, model: str, id: int):
        pass

    @abstractmethod
    def change_language(self, new_language: str):
        pass
    
    @abstractmethod
    def driver_def(self,driver_str: Keyboard_Driver):
        pass
    


#Mouse Interface DEF
class MouseInterface(ABC):
    @abstractmethod
    def __init__(self, name: str, model: str, id: int, dpi: float):
        pass

    @abstractmethod
    def change_dpi(self,new_dpi: float):
        pass


class KeyBoardMnx(KeyboardInterface):
       def __init__(self, name: str, model: str, id: int, dpi: float):
        self.name = name
        self.model = model;
        self.id = id;
        self.dpi = dpi
       
       def change_language(self, new_language: str):
           self.language = new_language
        
       def driver_def(self,driver: Keyboard_Driver):
           return driver


class MouseMnx(MouseInterface):

    def __init__(self, name: str, model: str, id: int, dpi: float):
        self.name = name
        self.model = model
        self.id = id
        self.dpi = dpi

    def change_dpi(self,new_dpi: float):
        self.dpi = new_dpi


