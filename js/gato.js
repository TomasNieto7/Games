let isPlayerOne = true;
let cuadros = document.getElementsByClassName("cuadro")
let reloadB = document.querySelector('#reload')
let results = document.querySelector('#results')

reloadB.addEventListener('click', e => {
    for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].innerHTML = ''
    }
    results.innerHTML = ''
})


for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener('click', userMove);
}

const showWinner = player => {
    results.innerHTML = player + ' win'
}

const showNone = () => {
    if (endGame(cuadros) === true) {
        results.innerHTML = 'Empate'
    }
}

const endGame = (array) => {
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].innerHTML.length) {
            contador++
        }
    }
    if (contador === 9) {
        return true
    } else {
        return false
    }

}

const checkLine = (c1, c2, c3) => {
    if (cuadros[c1].innerHTML.length &&
        cuadros[c1].innerHTML === cuadros[c2].innerHTML &&
        cuadros[c2].innerHTML === cuadros[c3].innerHTML
    ) {
        showWinner(cuadros[c1].innerHTML)
    } else showNone()

}

function userMove(e) {
    let cValue = e.target.innerHTML;
    if (!cValue.length) {
        e.target.innerHTML = isPlayerOne ? 'x' : 'o'
        isPlayerOne = !isPlayerOne

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}