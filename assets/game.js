

	// hover events, animation, winner display

	var tick = 0,
			oSpaces = [],
			xSpaces = [],
			winningValues = [[1,2,3], 
			[4,5,6], [7,8,9], [1,4,7], 
			[2,5,8], [3,6,9], [1,5,9], 
			[3,5,7]];

	$('.active').on('click', function(){
		var $this = $(this);
		
		$(this).unbind('click');
		
		if (tick === 0 || tick % 2 === 0) {
			playerTurn($this, 'O', oSpaces);
			checkForWin(oSpaces);
		} else if (tick === 9) {
			resetGame();
		} else {
			playerTurn($this, 'X', xSpaces);
			checkForWin(xSpaces);
		}

	});

	function playerTurn(space, player, ary) {
		space.append('<h1>' + player + '</h1>');
		ary.push(parseInt(space.attr('id')));
		$('.turn').empty().append(player);
		space.removeClass('active');
		tick++
	}

	function resetGame() {
		// delete all content from divs
		// reset tick
		// reset winner text
	}

	function checkForWin(ary) {
		if (tick >= 5) {
			ary.sort();
			
			for (var i=0; i < winningValues.length; i++){
				
				var temp = _.intersection(ary, winningValues[i]);
				
				if (arraysEqual(temp, winningValues[i])) {
					alert('winner ' + ary)
				}
			}
		}
	}

	function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a == null || b == null) return false;
	  if (a.length != b.length) return false;

	  for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	}

