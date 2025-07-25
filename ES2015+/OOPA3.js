class Person{
    constructor(name,id){
        this.name = name
        this.id = id
    }

    printPersonInfo(){
        console.log(`Person: name = ${this.name} id = ${this.id}`)
    }
}

class Employee extends Person{
    constructor(name,id,salary,post){
        super(name,id)
        this.name = name
        this.id = id
        this.salary = salary
        this.post = post
    }

    printEmployeeInfo(){
        console.log(`Employee: name = ${this.name} id = ${this.id} salary = ${this.salary} post = ${this.post}`)
    }
}

let employee = new Employee("Test",12311, 600000, "Senior Engineer")

let person = new Person("Test",12345)

employee.printEmployeeInfo()

employee.printPersonInfo()

person.printPersonInfo()