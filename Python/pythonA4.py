import random

random_number = random.randint(1,10)

user_guess = int( input("Guess a number between 1 and 10") )



while random_number != user_guess:
    if user_guess > random_number:
        print("The number is too big guess again.")
    else:
        print("The number is too small guess again.")
    
    user_guess = int( input("Guess a number between 1 and 10.") )

print(f"Congrats you have guess the correct number! {random_number}")


