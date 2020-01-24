let playerMove = true
// Make a function that will create a board with 9 squares
// don't forget to append
const createBoard = () => {
  const $container = $('.container')
  const $board = $('<div>').addClass('board')
  for (let i = 0; i < 9; i++) {
    const $square = $('<div>')
    .addClass('square')
    $board.append($square)
  }
  $container.append($board)
}
const move = (event) => {
  const $square = $(event.target)
  //console.log($square);
  const isSquareEmpty = !$square.text()
  //console.log(isSquareEmpty);

// Ensure that X and O will alternate each click.
  if (isSquareEmpty) {
    if (playerMove) {
      $square.append('<h3>X</h3>')
    } else {
      $square.append('<h3>O</h3>')
    }
    playerMove = !playerMove
  }
}
// Create a Board
$(() => {
  createBoard()
  $('.square').on('click', move)
})
