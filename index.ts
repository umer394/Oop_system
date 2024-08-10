#! /usr/bin/env node

import inquirer from "inquirer";

class Person {
    private personality :string;

    constructor(){
        this.personality = "mystery"
    }

    askQuestion(answer:number){
        if(answer===1){
            this.personality = "Extrovert"
        }else if(answer == 2){
            this.personality = "Introvert"
        }else{
            this.personality = "still a mystery"
        }
    }

    getPersonality(){
        return this.personality
    }
}


class Student extends Person{
    private _name:string;
    constructor(){
        super()
        this._name = ""
    }

        
    get Name(){
        return this._name
    }

    set Name(value:string){
        this._name = value
    }

    
}

try{
    let input = await inquirer.prompt({
        name:"userInput",
        type:"number",
        message:"Type 1 if youu want to talk with others and type 2 if you would rather keep  to yourself"
    })

    let myPerson = new Person()
    myPerson.askQuestion(parseInt(input.userInput))
    console.log("You are: "+ myPerson.getPersonality());

    let inputQues = await inquirer.prompt({
        name:"userQues",
        type:"input",
        message:"What is your name?"
    })
    let myStudent = new Student()
    myStudent.Name = inputQues.userQues
    console.log(`Your name is ${myStudent.Name} and your personlaity type is ${myPerson.getPersonality()}`)
}catch{
    console.log("Please enter an integer value");   
}