//Create a board
let boxes = document.querySelectorAll('.allBoxes')
let player1Turn = true
let player1 = 'X'
let player2 = 'O'
let box1 = document.querySelector('#box-1')
let box2 = document.querySelector('#box-2')
let box3 = document.querySelector('#box-3')
let box4 = document.querySelector('#box-4')
let box5 = document.querySelector('#box-5')
let box6 = document.querySelector('#box-6')
let box7 = document.querySelector('#box-7')
let box8 = document.querySelector('#box-8')
let box9 = document.querySelector('#box-9')
let gameBanner = document.querySelector('#banner')
let bannerTxt = document.querySelector('#bannerText')
let player1display = 0
let resetGameBtn = document.querySelector('#reset')
let click = 0
let gameOver = false

// Adding markers to the board 
//Users should be able to click square and see "X" or "O"
function addMarker()
{
    if (this.innerHTML == "" && gameOver == false)
    {
        if (player1Turn == true)
        {
            this.innerHTML = player1
            player1Turn = false
            click++
            checkWin()


        } else if (player1Turn == false)
        {
            this.innerHTML = player2
            player1Turn = true
            click++
            checkWin()

        }
    }
}
boxes.forEach(box =>
{
    box.addEventListener('click', addMarker)

})



//Every click will alternate between being for Player 1 or Player 2. The visual feedback should indicate whose turn it is.

bannerTxt.innerHTML = 'START'

function switchPlayer()
{
    if (player1display == 0)
    {
        bannerTxt.innerHTML = 'Player 2'

        player1display = 1
    } else if (player1display == 1)
    {
        bannerTxt.innerHTML = 'Player 1'

        player1display = 0
    };
}

boxes.forEach(box =>
{
    box.addEventListener('click', switchPlayer)
})



//A cell should not be able to be replayed once marked. Prevent double click on boxes.



// boxes.removeEventListener('click', addMarker);







//Add a reset button that will clear the contents of the board.

function rst()
{
    console.log('reset')
    boxes.forEach(box =>
    {
        box.innerHTML = ''
    })
    gameOver = false
    click = 0
    player1display = 1
    switchPlayer()
    player1Turn = true
}

resetGameBtn.addEventListener('click', rst)




//After the necessary moves have been played, stop game and alert the player to a win, loss or stalemate.
//Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.


function checkWin()
{

    if (box1.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X' ||
        box4.innerHTML == 'X' && box5.innerHTML == 'X' && box6.innerHTML == 'X' ||
        box7.innerHTML == 'X' && box8.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box1.innerHTML == 'X' && box4.innerHTML == 'X' && box7.innerHTML == 'X' ||
        box2.innerHTML == 'X' && box5.innerHTML == 'X' && box8.innerHTML == 'X' ||
        box3.innerHTML == 'X' && box6.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box1.innerHTML == 'X' && box5.innerHTML == 'X' && box9.innerHTML == 'X' ||
        box3.innerHTML == 'X' && box5.innerHTML == 'X' && box7.innerHTML == 'X')
    {
        alert('Player 1 Wins')
        gameOver = true
    } else if (box1.innerHTML == 'X' && box2.innerHTML == 'X' && box3.innerHTML == 'X' == 'O' ||
        box4.innerHTML == 'O' && box5.innerHTML == 'O' && box6.innerHTML == 'O' ||
        box7.innerHTML == 'O' && box8.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box1.innerHTML == 'O' && box4.innerHTML == 'O' && box7.innerHTML == 'O' ||
        box2.innerHTML == 'O' && box5.innerHTML == 'O' && box8.innerHTML == 'O' ||
        box3.innerHTML == 'O' && box6.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box1.innerHTML == 'O' && box5.innerHTML == 'O' && box9.innerHTML == 'O' ||
        box3.innerHTML == 'O' && box5.innerHTML == 'O' && box7.innerHTML == 'O')
    {
        alert('Player 2 Wins')
        gameOver = true
    }
    else if (click >= 9)
    {
        alert('Draw')
        gameOver = true
    }

}



const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

