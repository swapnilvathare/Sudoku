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
	var status = 'blank';
	$('table table td').each(function(i){
		//$(this).addClass('n'+n);
		if($(this).children('span').html() != ''){
			status = 'filled';
		}else{
			status = 'blank';
		}
		if(rowBox <= (3*lBox)){
			//$(this).addClass('r'+row+'b'+rowBox+' '+'c'+rowBox+'b'+row+ ' ' +'mB'+mBox);
			//$(this).html('r'+row+'b'+rowBox);
			//$(this).html('r'+row+'b'+rowBox+ '<br>' +'c'+rowBox+'b'+row+ '<br>' +'mB'+mBox);
			$(this).addClass('r'+row+' '+'c'+rowBox+ ' ' +'mB'+mBox+ ' ' +status);
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
	$(window).click(function() {
		$('input').hide();
	});
	$('table table td').click(function(event) {
		event.stopPropagation();
		$('input').hide();
		var defaultValu = $(this).children('span').html(); 
		$(this).children('input').val(defaultValu); 
		$(this).children('input').show(); 
		$(this).children('input').focus(); 
	});
	$('input').change(function(event){
		event.stopPropagation();
		var eText = $(this).val();
		$(this).parent('td').children('span').html(eText);
		if(eText == ''){
			$(this).parent('td').removeClass('filled');
			$(this).parent('td').addClass('blank');
		}else{
			$(this).parent('td').removeClass('blank');
			$(this).parent('td').addClass('filled');
		}
		$(this).hide();
	})
	var blank = 0;
	var totalRepeat = 0;
	var valueAdded = false;
	$('.solve').click(function(event) {
		solve();
	});
	function solve(){
		$('table table td.blank').each(function(index, el) {
			//if($(this).children('span').html() == ''){
				blank++;
				console.log($(this).attr('class'));
				var classes = $(this).attr('class');
				var divClass = classes.split(" ");
				var addValue = 0;
				var possibleVal = []
				for (n = 1; n <= 9; n++) {
					addValue = n;
					if($(this).children('span').html()!="")
						return
					for (i = 0; i < 3; i++) {
						$('.'+divClass[i]).each(function(){
							totalRepeat++;
							console.log(totalRepeat);
						    if($(this).children('span').html()== n){
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
					$(this).children('span').html(possibleVal[0]);
					$(this).addClass('ans');
					valueAdded = true;
				}
			//}
		});
		if(valueAdded == true){
			valueAdded = false;
			solve();
		}else{
			solveTwo();
		}
	}
	var lcbList = ['r', 'c', 'mB'];
	function solveTwo(){
		console.log('I am here');
		for (lcb = 0; lcb < 3; lcb++) {
			for (b = 1; b <= 9; b++) {

				for (n = 1; n <= 9; n++) {

					var possibleVal2 = []
					$('table table td.blank.'+lcbList[lcb]+b).each(function(index, el) {
						//if($(this).children('span').html() == ''){
							blank++;
							//console.log($(this).attr('class'));
							var classes = $(this).attr('class');
							var divClass = classes.split(" ");
							var addValue = 0;
							addValue = n;
							if($(this).children('span').html()!="")
								return
							for (i = 0; i < 3; i++) {
								totalRepeat++;
								console.log(totalRepeat);
								$('.'+divClass[i]).each(function(){
								    if($(this).children('span').html()== n){
								    	addValue = 0;
								    }
								})
							}
							if(addValue != 0){
								possibleVal2.push(classes);
							}
						//}
					});
					//console.log(possibleVal2 + " "+ b+ " "+ n);
					if(possibleVal2 != ''){
						console.log(n);
						console.log(possibleVal2);
					}
					if(possibleVal2.length == 1){
						var classes = possibleVal2[0].split(' ');
						$('.'+classes[0]+'.'+classes[1]+'.'+classes[2]).children('span').html(n);
						$('.'+classes[0]+'.'+classes[1]+'.'+classes[2]).addClass('ans ans2');
						valueAdded = true;
					}
				}
			}
		}

		if(valueAdded == true){
			valueAdded = false;
			solveTwo();
		}



		/*$('table table td').each(function(index, el) {
			if($(this).children('span').html() == ''){
				var classes = $(this).attr('class');
				var divClass = classes.split(" ");
				var addValue = 0;
				var possibleVal = [];

				
				for (n = 1; n <= 9; n++) {
					for (i = 0; i < divClass.length; i++) {
						$('.'+divClass[i]).each(function(){
						    if($(this).children('span').html()== n){
						    	addValue = 0;
						    }
						})
					}
				}
				console.log(possibleVal);
				if(possibleVal.length == 1){
					$(this).children('span').html(possibleVal[0]);
					$(this).addClass('ans');
					valueAdded = true;
				}
			}
		});*/
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
