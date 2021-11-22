document.getElementById("result_btn").addEventListener("click", function(){
    myFunction();
});

var team1 = document.getElementById("team1");
var team2 = document.getElementById("team2");
var stopExecution = 0;
const myFunction = () => {
    let team1Values = team1.value;
    let team2Values = team2.value;
    let playerNames1 = [];
    let playerNames2 = [];
    let ct = 0;
    let tempPlayerName = "";
    let names1 = playersNames(team1Values, playerNames1, ct, tempPlayerName);
    let names2 = playersNames(team2Values, playerNames2, ct, tempPlayerName);

    function playersNames(value, names, ct, tempPlayerName){
        for (var i = 0; i < value.length; i++){
            if (value[i] != "," && value[i] != " "){
                    tempPlayerName += value[i];
                }
            if (i == value.length - 1 || value[i] == " "){
                names.push(tempPlayerName);
                tempPlayerName = "";
                ct++;
            }
        }
        if(ct > 11) {
            alert("The number of players in one team cannot be greater than 11!")
            stopExecution = 1;
        }
        if(ct == 0) {
            alert("Please, enter team's members!")
            stopExecution = 1;
        }
        return names;
    }

    console.log("Team #1 players: ")
    names1.forEach((element) => {
        console.log(element);
    });

    console.log("Team #2 players: ")
    names2.forEach((element) => {
        console.log(element);
    });

    let score1 = document.getElementById("score1").value;
    let score2 = document.getElementById("score2").value;
    let goals1 = goalsCounter(score1);
    let goals2 = goalsCounter(score2);

    function goalsCounter(score){
        let goals = "";
        switch(Number(score)){
            case 1:
                 goals += "Possible goal combinations: (1)";
                break;
            case 2:
                 goals += "Possible goal combinations: (1 1), (2)";
                break;
            case 3:
                 goals += "Possible goal combinations: (1 1 1), (1 2), (3)";
                break;
            case 4:
                 goals += "Possible goal combinations: (1 1 1 1), (1 1 2), (1 3), (2 2), (4)";
                break;
            case 5:
                 goals += "Possible goal combinations: (1 1 1 1 1), (1 1 1 2), (1 1 3), (1 2 2), (1 4), (5)";
                break;
            case 6:
                 goals += "Possible goal combinations: (1 1 1 1 1 1), (1 1 1 1 2), (1 1 1 3), (1 1 2 2), (1 1 4), (1 2 3), (1 5), (2 2 2), (2 4), (6)";
                break;
            case 7:
                 goals += "Possible goal combinations: (1 1 1 1 1 1 1), (1 1 1 1 1 2), (1 1 1 1 3), (1 1 1 4), (1 1 2 3), (1 1 5), (1 2 2 2), (1 2 4), (7)";
                break;
            default:
                goals = "0";
        }
        return (goals);
    }

    if((Number(score1) + Number(score2)) > 7) {
        alert("The number of goals can not be greater than 7!");
        stopExecution = 1;
    }
    if(Number(score1) < 0 || Number(score2) < 0){
        alert("The goal number cannot be negative!")
        stopExecution = 1;
    }
    if(stopExecution) {
        return;
    }
    if(score1 > score2) {
        document.getElementById("result").innerHTML = "The winner is team #1!  <br>" + goals1 + "<br>" + goals2;  
    }
    
    if(score1 < score2) {
        document.getElementById("result").innerHTML = "The winner is team #2!  <br>" + goals1 + "<br>" + goals2;  
    }
    
    if(score1 == score2) {
        document.getElementById("result").innerHTML = "Draw! <br>" + goals1 + "<br>" + goals2;  
    }
}
