from abc import ABC, abstractmethod

# Abstract class with an abstract method
class Animal(ABC):
    # Abstract method (must be implemented by subclass)
    @abstractmethod
    def sound(self):
        return 'go'

# Concrete class that implements the abstract method
class Dog(Animal):
    # Implementing the abstract method from the parent class
    def sound(self):
        return "Woof!"

# Instantiating the concrete class and calling the implemented method
dog = Dog()
print(dog.sound())  # Output: Woof!
