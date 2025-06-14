class Car:
    weight = 2,875
    make = "Toyota"
    model = "Corolla"
    price =  19995
    year = 2025
    top_speed = 240

    def printInfo(self):
        print(f"Make: { self.make }, Model: {self.model}, Price: {self.price}, Year: {self.year}, Weight:{self.weight}")
    


toyota1 = Car()

toyota1.printInfo()

toyota2 = Car()

toyota2.printInfo()