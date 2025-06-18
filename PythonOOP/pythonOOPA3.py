class Person:
    def __init__(self, name, id):
        self.name = name
        self.id = id

    def displayInfo(self):
        print(f"Name: {self.name} Id: {self.id}")


class Employee(Person):
    def __init__(self, name, id, salary, post):
        super().__init__(name,id)
        self.salary = salary
        self.post = post

person = Person("Test Name", 1)
employee = Employee("Test Name 2", 2, 2000000, "Senior Engineer")

person.displayInfo()
employee.displayInfo()