document.addEventListener('DOMContentLoaded', (e) => {
    let userScore = 0;
    let userCPU = 0;
    let cpuChoice = '';
    let userChoice = '';
    const choices = ['rock', 'paper', 'scissors']
    const bRock = document.getElementById('rock');
    const bPaper = document.getElementById('paper');
    const bScissors = document.getElementById('scissors');
    const scUser = document.getElementById('scUser');
    const scCPU = document.getElementById('scCPU');


    function lose() {
        scCPU.textContent = userCPU++;
    }

    function win() {
        scUser.textContent = userScore++;;
    }

    function getCpuChoice() {
        const rNum = Math.floor(Math.random() * 3);
        return choices[rNum];
    }

    function play(uChoice) {
        cpuChoice = getCpuChoice();
        userChoice = uChoice;
        console.log(userChoice + cpuChoice);
        switch (userChoice + cpuChoice) {
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                win();
                console.log('ganaste');
                break;
            case 'rockpaper':
            case 'scissorsrock':
            case 'paperscissors':
                lose();
                console.log('perdiste');
                break;
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                console.log('empate');
                break;
        }
    }


    function main() {
        bRock.addEventListener('click', () => {
            play('rock');
        });
        bPaper.addEventListener('click', () => {
            play('paper');
        });
        bScissors.addEventListener('click', () => {
            play('scissors');
        });
    }

    main();
});