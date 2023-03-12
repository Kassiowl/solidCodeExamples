from abc import ABC, abstractmethod
from ast import List


#Keyboard driver def
class Keyboard_Driver:

    def __init__(self, driver_dependencies: List[str]):
        pass


#interface DEF
class PeripheralInterface(ABC):

    @abstractmethod
    def __init__(self, name: str, model: str, dpi: float, id: int, language: str):
        pass

    @abstractmethod
    def change_language(self, new_language: str):
        pass
    
    @abstractmethod
    def driver_def(self,driver_str: Keyboard_Driver):
        pass


    @abstractmethod
    def change_dpi(self,new_dpi: float):
        pass


class KeyboardMnx(PeripheralInterface):
    def __init__(self, name: str, model: str, dpi: float, id: int, language: str):
        self.name = name
        self.model = model
        self.id = id
        self.dpi = 0
        self.language = language

    
    def change_language(self,new_language: str):
        self.language = new_language
        return self.language

    def change_dpi(new_dpi: float):
        raise NotImplementedError("Not possible for keyboard") 

class MouseMnx(PeripheralInterface):
    def __init__(self, name:str, model: str, dpi: float, id: int, language: str):
        self.name = name
        self.model = model
        self.id = id
        self.dpi = dpi
        self.language = None
    
    def change_language(self, new_language: str):
        raise NotImplementedError("Not possible for mouse") 
    
    def change_dpi(self,new_dpi: float):
        self.dpi = new_dpi
        return self.dpi

    
