# Scissors cuts Paper
# Paper covers Rock
# Rock crushes Scissors

from random import randint

list_options = ["rock", "paper", "scissors"]

class User:
    def __init__(self):
        self.options = "None"
        self.score = 0

    # define input function from user
    def get_input(self, options, run):
        z = 0
        for x in range(3):
            if options == list_options[x]:
                z = 1
        if z == 0:
            print("Wrong input")
            run = False
            return run
        else:
            print("Input accepted")
            self.options = options
            return run        

    def return_options(self):
        return self.options
    
    def check(self, computer_choice):
        if self.options != "None":
            if self.options == "rock" and computer_choice == "paper":
                self.score = self.score - 1
            elif self.options == "rock" and computer_choice == "scissors":
                self.score = self.score + 1  
            if self.options == "paper" and computer_choice == "rock":
                self.score = self.score + 1
            elif self.options == "paper" and computer_choice == "scissors":
                self.score = self.score - 1 
            if self.options == "scissors" and computer_choice == "paper":
                self.score = self.score + 1
            elif self.options == "scissors" and computer_choice == "rock":
                self.score = self.score - 1

    def return_score(self):
        return self.score

user = User()
run = True
while run:
    run = user.get_input(input("Please enter your choice:"), run)
    if run:
        computer_choice = list_options[randint(0, 2)]
        print(f"The computer chose {computer_choice}")
        user.check(computer_choice)
        print(user.return_score())
