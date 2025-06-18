class Vehicle:
    def __init__(self, weight, base_speed):
        self.weight = weight
        self.base_speed = base_speed

    def printVehicleStats(self):
        print("Weight: " , self.weight, "Base Speed: ", self.base_speed)


class Car(Vehicle):
   def __init__(self,weight,base_speed,make,model):
       super().__init__(weight,base_speed)
       self.make = make
       self.model = model
       

newcar = Car(3000,150,"","")

print( newcar.printVehicleStats() )