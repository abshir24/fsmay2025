class Car:
    top_speed = 200
    location = 0

    def printTopSpeed(self):
        print("Top speed:",self.top_speed)
    
    def drive(self):
        print("Driving....")
        self.location += 10

    def stop(self):
        print("Total distance driven: ", self.location)


car = Car()

car.printTopSpeed()
car.drive()
car.drive()
car.drive()
car.stop()
