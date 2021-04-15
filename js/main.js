document.addEventListener('DOMContentLoaded', (e) => {
    let userScore = 1;
    let userCPU = 1;
    let cpuChoice = '';
    let userChoice = '';
    const choices = ['rock', 'paper', 'scissors']
    const bRock = document.getElementById('rock');
    const bPaper = document.getElementById('paper');
    const bScissors = document.getElementById('scissors');
    const scUser = document.getElementById('scUser');
    const scCPU = document.getElementById('scCPU');
    const result = document.getElementById('result');
    const modal = document.querySelector('.modal');




    function draw() {
        result.innerHTML = `
            <h2 class="text-draw">It's a draw!</h2>
            <p class="modal__text">Computer choose <strong>${cpuChoice}</strong></p>
            `;
        modal.style.display = 'block';
    }

    function lose() {
        scCPU.textContent = userCPU++;
        result.innerHTML = `
            <h2 class="text-lose">You lose!</h2>
            <p class="modal__text">Computer choose <strong>${cpuChoice}</strong></p>
            `;
        modal.style.display = 'block';
    }

    function win() {
        scUser.textContent = userScore++;;
        result.innerHTML = `
            <h2 class="text-win">You won!</h2>
            <p class="modal__text">Computer choose <strong>${cpuChoice}</strong></p>
            `;

        modal.style.display = 'block';
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
                draw();
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

    function clearModal(e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }
    }

    window.addEventListener('click', clearModal);

    main();
});