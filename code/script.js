let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(index) {
	if (gameActive && board[index] === '') {
		board[index] = currentPlayer;
		document.getElementsByClassName('cell')[index].innerText = currentPlayer;
		checkWin();
		togglePlayer();
	}
}

function togglePlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	document.getElementById("current-player").innerHTML = currentPlayer;
}

function checkWin() {
	const winningConditions = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
		[0, 4, 8], [2, 4, 6] // Diagonals
	];

	for (let condition of winningConditions) {
		const [a, b, c] = condition;
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			gameActive = false;
			alert(`${currentPlayer} wins!`);
		}
	}
}

function resetGame() {
	currentPlayer = 'X';
	board = ['', '', '', '', '', '', '', '', ''];
	gameActive = true;
	document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}