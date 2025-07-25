class MyClass:
    def __init__(self, attribute1, attribute2):
        """
        This is the constructor method for MyClass.
        It initializes the attributes of a new MyClass object.
        """
        self.attribute1 = attribute1  # Assign the passed argument to an instance attribute
        self.attribute2 = attribute2  # Assign the passed argument to another instance attribute

    def display_attributes(self):
        """
        A regular method to display the attributes of the object.
        """
        print(f"Attribute 1: {self.attribute1}")
        print(f"Attribute 2: {self.attribute2}")