	const easyScore = document.querySelector('#easyScore');
	const mediumScore = document.querySelector('#mediumScore');
	const hardScore = document.querySelector('#hardScore');

	let difficulty = document.querySelector('#difficulty').value;
	
	const grid = document.querySelector('.grid')
	const flagsLeft = document.querySelector('#flags-left')
	const timer = document.querySelector('#timer')
	const result = document.querySelector('#result')
	const newGameBtn = document.querySelector('#newGame')
	let width = 10
	let bombAmount = 0
	let flags = 0
	let squares = []
	let isGameOver = false
	let time = 0 //seconds
	let timeout;

	let scores = {
		easy: []
		, medium: []
		, hard: []
	};

	let element = {
		easy: easyScore,
		medium: mediumScore,
		hard: hardScore
	}

	// localStorage.clear(); //to clear local storage

	function bombCountSetter(level) {
		switch(level) {
			case 'easy': bombAmount = 10;
				break;
			case 'medium': bombAmount = 15;
				break;
			case 'hard': bombAmount = 20;
				break;
		}
	}

	newGameBtn.addEventListener('click', (e) => {
		grid.innerHTML = '';
		difficulty = document.querySelector('#difficulty').value;
		bombCountSetter(difficulty);
		flags = 0
		squares = []
		isGameOver = false
		result.innerHTML = ''
		time = 0
		clearInterval(timeout)
		createBoard();
		easyScore.innerHTML = ''
		mediumScore.innerHTML = ''
		hardScore.innerHTML = ''
		displayScore()
	});

	//create Board
	function createBoard() {
		timerFunction();

		flagsLeft.innerHTML = bombAmount

		//get shuffled game array with random bombs
		const bombsArray = Array(bombAmount).fill('bomb')
		const emptyArray = Array(width*width - bombAmount).fill('valid')
		const gameArray = emptyArray.concat(bombsArray)
		const shuffledArray = gameArray.sort(() => Math.random() -0.5)

		for(let i = 0; i < width*width; i++) {
			const square = document.createElement('div')
			square.setAttribute('id', i)
			square.classList.add(shuffledArray[i])
			grid.appendChild(square)
			squares.push(square)

			//left click
			square.addEventListener('click', function(e) {
				click(square)
			})

			//right click
			square.oncontextmenu = function(e) {
				e.preventDefault()
				addFlag(square)
			}
		}

		//add numbers
		for (let i = 0; i < squares.length; i++) {
			let total = 0
			const isLeftEdge = (i % width === 0)
			const isRightEdge = (i % width === width -1)

			if (squares[i].classList.contains('valid')) {
				if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++
				if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++
				if (i > 10 && squares[i -width].classList.contains('bomb')) total ++
				if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++
				if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++
				if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++
				if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++
				if (i < 89 && squares[i +width].classList.contains('bomb')) total ++
				squares[i].setAttribute('data', total)
			}
		}
	}
	bombCountSetter(difficulty);
	createBoard()
	displayScore()

	function timerFunction() {
		timeout = setInterval(function () {
			time++;
			if( time >= 600) {
				result.innerHTML = 'BOOM! Game Over!'
				isGameOver = true
				time = 600
				clearInterval(timeout)
			}
			timer.innerHTML = time;
		}, 1000);
	}

	function displayScore() {
		let localScore = JSON.parse(localStorage.getItem('localObj'));
		// console.log(localScore)
		let arr = [];
		if(localScore) {
			let key, value;
			for([key, value] of Object.entries(element)) {
				arr = localScore[key].sort((a,b) => a-b).slice(0,10);
				arr.forEach(item => {
					let td = document.createElement('td');
					td.innerHTML = item;
					value.appendChild(td)
				});
			}
		}
	}

	//add Flag with right click
	function addFlag(square) {
		if (isGameOver) return
		if (!square.classList.contains('checked') && (flags < bombAmount)) {
			if (!square.classList.contains('flag')) {
				square.classList.add('flag')
				square.innerHTML = ' 🚩'
				flags ++
				flagsLeft.innerHTML = bombAmount- flags
				checkForWin()
			} 
			else {
				square.classList.remove('flag')
				square.innerHTML = ''
				flags --
				flagsLeft.innerHTML = bombAmount- flags
			}
		}
	}

	//click on square actions
	function click(square) {
		let currentId = square.id
		if (isGameOver) return
		if (square.classList.contains('checked') || square.classList.contains('flag')) return

		if (square.classList.contains('bomb')) {
			gameOver()
		} 
		else {
			let total = square.getAttribute('data')
			if (total !=0) {
				square.classList.add('checked')
				if (total == 1) square.classList.add('one')
				if (total == 2) square.classList.add('two')
				if (total == 3) square.classList.add('three')
				if (total == 4) square.classList.add('four')
				square.innerHTML = total
				return
			}
			checkSquare(currentId)
		}
		square.classList.add('checked')
	}


	//check neighboring squares once square is clicked
	function checkSquare(currentId) {
			const isLeftEdge = (currentId % width === 0)
			const isRightEdge = (currentId % width === width -1)

			setTimeout(() => {
				if (currentId > 0 && !isLeftEdge) {
					const newId = squares[parseInt(currentId) -1].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId > 9 && !isRightEdge){
					const newId = squares[parseInt(currentId) +1 -width].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId > 10) {
					const newId = squares[parseInt(currentId -width)].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId > 11 && !isLeftEdge) {
					const newId = squares[parseInt(currentId) -1 -width].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId < 98 && !isRightEdge) {
					const newId = squares[parseInt(currentId) +1].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId < 90 && !isLeftEdge) {
					const newId = squares[parseInt(currentId) -1 +width].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId < 88 && !isRightEdge) {
					const newId = squares[parseInt(currentId) +1 +width].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
				if (currentId < 89) {
					const newId = squares[parseInt(currentId) +width].id
					const newSquare = document.getElementById(newId)
					click(newSquare)
				}
			}, 10)
	}

	//game over
	function gameOver() {
		result.innerHTML = 'BOOM! Game Over!'
		isGameOver = true
		clearInterval(timeout)

		//show ALL the bombs
		squares.forEach(square => {
			if (square.classList.contains('bomb')) {
				square.innerHTML = '💣'
				square.classList.remove('bomb')
				square.classList.add('checked')
			}
		})
	}

	//check for win
	function checkForWin() {
		let matches = 0
		for (let i = 0; i < squares.length; i++) {
			if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
				matches ++
			}
			if (matches === bombAmount) {
				result.innerHTML = 'YOU WIN!'
				isGameOver = true
				setScore();
				clearInterval(timeout)
				break;
			}			
		}
	}

	//Setting the high-score table
	function setScore() {
		if (localStorage.getItem('localObj')) {
			let localScore = JSON.parse(localStorage.getItem('localObj'));
			if (!localScore[difficulty].includes(time)) {
				localScore[difficulty].push(time);
			}
			localStorage.setItem('localObj', JSON.stringify(localScore));
		} 
		else 
		{
			if (!scores[difficulty].includes(time)) {
				scores[difficulty].push(time);
			}
			localStorage.setItem('localObj', JSON.stringify(scores));
		}
	}
