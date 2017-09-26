//jQuery(document).ready(function($) {
	var totalN = 0;
	var n = 1;
	var row = 1;
	var rowBox = 1;
	var col = 1;
	var colBox = 1;
	var lBox = 1;
	var mBox = 1;
	var mBoxBox = 1;
	var col = 1;
	$('table table td').each(function(i){
		//$(this).addClass('n'+n);
		if(rowBox <= (3*lBox)){
			//$(this).addClass('r'+row+'b'+rowBox+' '+'c'+rowBox+'b'+row+ ' ' +'mB'+mBox);
			//$(this).html('r'+row+'b'+rowBox);
			//$(this).html('r'+row+'b'+rowBox+ '<br>' +'c'+rowBox+'b'+row+ '<br>' +'mB'+mBox);
			$(this).addClass('r'+row+' '+'c'+rowBox+ ' ' +'mB'+mBox);
			//$(this).html('r'+row+ '<br>' +'c'+rowBox+ '<br>' +'b'+mBox);
			if(rowBox != (3*lBox)){
				rowBox++;
				//console.log(rowBox+" if "+ n);
			}else {
				rowBox = rowBox - 2;
				row++;
				//console.log(rowBox+" else "+ n);
			}
			if((n%9)==0){
				lBox++;
				mBox++;
				rowBox = rowBox + 3;
				row = row - 3;
			}
			if((n%27)==0){
				rowBox = 1;
				lBox = 1;
				row = row + 3;
			}
		}
		n++;
	})
	var blank = 0;
	var totalRepeat = 0;
	$('.solve').click(function(event) {
		solve();
	});
	function solve(){
		$('table table td').each(function(index, el) {
			if($(this).html() == ''){
				blank++;
				//console.log($(this).attr('class'));
				var classes = $(this).attr('class');
				var divClass = classes.split(" ");
				var addValue = 0;
				var possibleVal = []
				for (n = 1; n <= 9; n++) {
					addValue = n;
					if($(this).html()!="")
						return
					for (i = 0; i < divClass.length; i++) {
						$('.'+divClass[i]).each(function(){
							totalRepeat++;
							console.log(totalRepeat);
						    if($(this).html()== n){
						    	addValue = 0;
						    }
						})
					}
					if(addValue != 0){
						possibleVal.push(addValue);
					}
				}
				console.log(possibleVal);
				if(possibleVal.length == 1){
					$(this).html(possibleVal[0]);
					$(this).addClass('ans');
				}
			}
		});
	}

	/*var blank = 0;
	$('.solve').click(function(event) {
		$('table table td').each(function(index, el) {
			if($(this).html() == ''){
				blank++;
				//console.log($(this).attr('class'));
				var classes = $(this).attr('class');
				var divClass = classes.split(" ");
				var hasInRow = false;
				var addValue = 0;
				for (n = 1; n <= 9; n++) {
					addValue = n;
					if($(this).html()!="")
						return
					for (i = 0; i < divClass.length; i++) {
						$('.'+divClass[i]).each(function(){
							//console.log(divClass[i]);
							console.log($(this).html());
						    if($(this).html()== n){
						    	//hasInRow = true;
						    	addValue = 0;
						    }
						})
					}
					if(addValue != 0){
						$(this).html(addValue);
						addValue = 0;
					}
				}
			}
		});
		console.log(blank);
	});*/
//});
