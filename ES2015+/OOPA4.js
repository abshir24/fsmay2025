class BigCat{
    constructor(){
        this.speed = 5
        this.strength = 5
        this.intelligence = 5
        this.health = 5
        this.durability = 5
    }
}


class Lion extends BigCat{
    constructor(){
        super()
        this.strength = 50
        this.health = 50
    }

    king(bigcat){
        if(bigcat instanceof Cheetah){
            let percentage = Math.round( Math.random() * 10)

            if(percentage<=6){
               console.log("The cheetah has gotten away") 

               return 
            }
        }

        bigcat.speed = 0
        bigcat.strength = 0
        bigcat.intelligence = 0
        bigcat.health = 0
        bigcat.durability = 0
    }
}

