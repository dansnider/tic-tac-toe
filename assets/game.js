function(){

	// hover events, animation, winner display

	var tick = 0,
			oSpaces = [],
			xSpaces = [];

	$('.space').on('click', function(){

		if (tick === 0 || tick % 2 === 0) {
			playerTurn(this, 'O', oSpaces);
			checkForWin(oSpaces);
		} else if (tick === 9) {
			resetGame();
		} else {
			playerTurn(this, 'X', xSpaces);
			checkForWin(xSpaces);
		}

	});

	function playerTurn(space, player, ary) {
		$(space).append('<h1>' + player + '</h1>');
		ary.push(this.id);
		$('.turn').empty().append('"' + player + '"');
		$(space).removeClass('space');
		tick++
	}

	function resetGame() {
		// delete all content from divs
		// reset tick
		// reset winner text
	}

	function checkForWin(ary) {
		if (tick >= 5) {
			//loop through array, check to see if it has:
			// [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]	
		}
	}

}();