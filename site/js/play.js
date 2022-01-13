
/*This whole part is the code that makes chessboard.js & chess.js 
** libraries works it only makes random chess moves but i'll be able
** to add a computer to this
*/

var board = null
var $board = $('#chess_board')
var game = new Chess()
var squareToHighlight = null
var squareClass = 'square-55d63'

function removeHighlights(color) {
    $board.find('.' + squareClass)
        .removeClass('highlight-' + color)
}

function onDragStart(source, piece, position, orientation) {
    // do not pick up pieces if the game is over
    if (game.game_over()) return false

    // only pick up pieces for White
    if (piece.search(/^b/) !== -1) return false
}

function makeRandomMove() {
    var possibleMoves = game.moves({
        verbose: true
    })

    // game over
    if (possibleMoves.length === 0) return

    var randomIdx = Math.floor(Math.random() * possibleMoves.length)
    var move = possibleMoves[randomIdx]
    game.move(move.san)

    // highlight black's move
    removeHighlights('black')
    $board.find('.square-' + move.from).addClass('highlight-black')
    squareToHighlight = move.to

    // update the board to the new position
    board.position(game.fen())
}

function onDrop(source, target) {
    // see if the move is legal
    var move = game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    // illegal move
    if (move === null) return 'snapback'

    // highlight white's move
    removeHighlights('white')
    $board.find('.square-' + source).addClass('highlight-white')
    $board.find('.square-' + target).addClass('highlight-white')

    // make random move for black
    window.setTimeout(makeRandomMove, 250)
}

function onMoveEnd() {
    $board.find('.square-' + squareToHighlight)
        .addClass('highlight-black')
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd() {
    board.position(game.fen())
}

var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMoveEnd: onMoveEnd,
    onSnapEnd: onSnapEnd
}

board = Chessboard('chess_board', config)

// End of the libraries code








// hide & show burger menu on click
document.getElementById('toggle').onclick = function () {
    document.getElementById('menu').style.display = this.checked ? 'inherit' : 'none'
    document.getElementById('burger').src = this.checked ? 'assets/images/burger_open.png' : 'assets/images/burger_closed.png'
}

// resize chessboard & burger menu
window.addEventListener('resize', resize)

function resize() {
    resize_chessboard()
    resize_burger()
}

function resize_chessboard() {
    board.resize()

    /* since the board is divided in 8 squares it impossible to have
    ** a board total width that isn't divisible by 8. and chessboard.js
    ** does not automatically align the chessboard inside the div
    ** so this code does that.
    */
    var board_elm = document.getElementById('chess_board')
    var board_elm_style = window.getComputedStyle(board_elm)
    var offset_x = (parseInt(board_elm_style.width, 10) - calculateSquareSize(board_elm_style.width)) / 2
    // board_elm.style.marginLeft = offset_x + 'px'
}

function calculateSquareSize(w) {
    var containerWidth = parseInt(w, 10)

    if (!containerWidth || containerWidth <= 0) {
        return 0
    }

    var boardWidth = containerWidth - 1

    while (boardWidth % 8 !== 0 && boardWidth > 0) {
        boardWidth = boardWidth - 1
    }

    return boardWidth
}

function resize_burger() {
    var checkbox = document.getElementById('toggle')
    var burger_style = window.getComputedStyle(document.getElementById('burger'))
    checkbox.style.marginLeft = burger_style.marginLeft
    checkbox.style.marginTop = burger_style.marginTop
    checkbox.style.width = burger_style.width
    checkbox.style.height = burger_style.height
}

// bug correction
setTimeout(() => { resize() }, 100) 