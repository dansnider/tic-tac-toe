$(function(){
	init();
});

function init() {

	var tick = 0,
			oSpaces = [],
			xSpaces = [],
			winningValues = [[1,2,3], 
			[4,5,6], [7,8,9], [1,4,7], 
			[2,5,8], [3,6,9], [1,5,9], 
			[3,5,7]],
			colorArray = [0, '#42FFCB',
			'#DA4167', '#FCD757', '#2B09B9',
			'#F18F01', '#048BA8', '#99C24D'];

	$('.active').on('click', function(){
		var $this = $(this);
		$(this).unbind('click');

		if (tick === 0 || tick % 2 === 0) {
			tick++;
			playerTurn($this, 'O', oSpaces);
			checkForWin(oSpaces);
			$('.current-turn').empty().append("X");
		} else {
			tick++;
			playerTurn($this, 'X', xSpaces);
			checkForWin(xSpaces);
			$('.current-turn').empty().append("O");
		}

	});

	function playerTurn(space, player, ary) {
		space.append('<h1>' + player + '</h1>');
		ary.push(parseInt(space.attr('id')));
		
	}

	function resetGame() {
		$('.turn-display').css('opacity', 1);
		$('.current-turn').empty().append("O");
		init();
		hideModal();
		$('#gameboard div h1').remove();
	}

	function checkForWin(ary) {
		if (tick >= 5) {
			ary.sort();
			
			for (var i = 0; i < winningValues.length; i++){
				var temp = _.intersection(ary, winningValues[i]);
				
				if (arraysEqual(temp, winningValues[i])) {
					var winner = $("#" + temp[0]).children().contents()[0];
					
					colorDecoration(temp);

					window.setTimeout(function(){
						openModal(winner)}, 1999);
					$('.turn-display').css('opacity', 0);
					$('.active').unbind('click');

				} else if (tick == 9 && !winner) {
					window.setTimeout(function(){
						openDrawModal()}, 2000);
					$('.turn-display').css('opacity', 0);
					$('.active').unbind('click');
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

	function openModal(winner) {
		$('.winner').empty().append(winner);
		$('.modal').show();
	}

	function openDrawModal() {
		$('.modal.modal-draw').show();
	}

	function hideModal() {
		$('.modal').hide();
	}

	$('.button').on('click', function(){
		resetGame();
	})

	function colorDecoration(spaces) {
		for (var i = 0; i < spaces.length; i++) {
			$('#' + spaces[i] + " h1").addClass('winner');
		}	
	}

}