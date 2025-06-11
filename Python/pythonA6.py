import random

user_guess = int( input("Roll the dice (Pick a number from 1-6)") )
dice_roll = random.randint(1,6)

tries = 1

while user_guess != dice_roll:
    user_guess = int( input("Roll the dice (Pick a number from 1-6)") )
    dice_roll = random.randint(1,6)
    tries += 1

print(f"You have successfully rolled {dice_roll}. It only took {tries} tries!")