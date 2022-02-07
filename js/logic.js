const game = [
  ['-', '-', '-'],
  ['-', '-', '-'],
  ['-', '-', '-'],
]

let currentUser = 'O'

function checkStatus(user) {
  game[0][0]
  game[0][1]
  game[0][2]

  game[1][0]
  game[1][1]
  game[1][2]

  game[2][0]
  game[2][1]
  game[2][2]

  game[0][0]
  game[1][0]
  game[2][0]

  game[0][1]
  game[1][1]
  game[2][1]

  game[0][2]
  game[1][2]
  game[2][2]

  game[0][0]
  game[1][1]
  game[2][2]

  game[0][2]
  game[1][1]
  game[0][2]
}

function selectItem() {
  game[this.dataset.row][this.dataset.column] = currentUser
  checkStatus(currentUser)
  setBoard()
  if (currentUser === 'O') {
    currentUser = 'X'
  } else {
    currentUser = 'O'
  }
  console.log(this.textContent);
}

function render({ content, row, column }, container) {
  const el = document.createElement('span')
  el.textContent = `${content} [${row}] [${column}]`
  el.dataset.row = row
  el.dataset.column = column
  el.addEventListener('click', selectItem)
  container.append(el)
}

function setBoard() {
  container.innerHTML = ''
  game.forEach((row, indexRow) => {
    row.forEach((column, indexColumn) => {
      render({
        content: column,
        row: indexRow,
        column: indexColumn,
      }, window.container)
    })
  })
}

setBoard()
