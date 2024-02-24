let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateCompOption = () => {
    const options = [`rock`,`paper`,`scissors`];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}
const drawgame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";
}
const playGame = (userchoice) => {
    const compchoice = generateCompOption();

    if(userchoice === compchoice){
        //draw
        drawgame();
    }
    else{
        let userwin =  true;
        if(userchoice === "rock"){
            //scissors,paper
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock,scissors
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            //rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Win! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});