
var chocolateCake = {
ingredients: ["chocolate", "flour", "sugar", "eggs", "water"],
isVegan: false,
calories: 594,
feeds: 8,
tag: "child-friendly"
};

var destructureChocolateCake = function() {
    let {isVegan, calories} = chocolateCake

    console.log("Is Vegan? ", isVegan, "Calories ", calories)
};

destructureChocolateCake();