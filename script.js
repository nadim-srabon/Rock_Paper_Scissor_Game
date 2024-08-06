let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const button = document.querySelector(".theme-checkbox");
const body = document.querySelector("body");
const heading = document.querySelector("h1");

let currMode = "light";

button.addEventListener("click",()=>{

    if(currMode === "light"){

        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        heading.style.color = "white";
        
    }
    else{
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        heading.style.color = "black";
       
    }

    
    

});

choices.forEach((choice) => {

    choice.addEventListener("click",() =>{

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });


});

const drawGame = (userChoice,compChoice) => {

    msg.innerText = `Game Drawn! You : ${userChoice} Computer: ${compChoice}`;
    msg.style.backgroundColor = "black";
}

const genCompChoice = () =>{

    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)] ;
    

}

const showWinner = (userWin,userChoice,compChoice) => {

    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;

    }
    else{
        msg.innerText = `You Lose! Your ${userChoice} can't beats ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) =>{

    console.log("user",userChoice);
    const compChoice = genCompChoice();
    console.log("computer",compChoice);

    if(userChoice === compChoice){

        drawGame(userChoice,compChoice);
    }

    else {

        let userWin = true;

        if(userChoice === "rock"){
            
           userWin = compChoice === "paper" ? false : true;

        }
        else if(userChoice === "paper"){

           userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);


    }

}