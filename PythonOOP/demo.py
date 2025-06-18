class Car:

    def __init__(self, make, model, year, price):
       self.make = make
       self.model = model
       self.year = year 
       self.price = price



    def printInfo(self):
        print(f"Make: { self.make }, Model: {self.model}, Price: {self.price}, Year: {self.year}")
    

toyota1 = Car("Toyota","Corolla",2025,24000)