// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

	var counter = 1;
	$('ol > li').each(function(){
		var ele = $(this);
		ele.css('color', '#3333ff');
		ele.text("This is new text " + counter);
		counter++;
	});

	$('#mahAccordian > #accHeader').data('open', 1);
	$('#mahAccordian > #accHeader').on('click', function(){
		var ele = $(this);
		if(ele.data('open') == 1){
			$("#accBody").css({height: 0});
			ele.data('open', 0);
			ele.find('span').text('open.');
		}
		else{
			$("#accBody").css({height: 'initial'});
			ele.data('open', 1);
			ele.find('span').text('close.');			
		}

	});

	$('#fader').on('click', function(){
		$('body').find('*').animate({opacity: 0}, 'slow', function(){
			$('body').html('<section id="byeee">Later fools</section>');
		});
	})


//My fun-ction ayyyyyyyyyyyyy
	var total_section = 0;
	$('#randomizer').on('click', function(){
		var iterations = 0;
		$('section + p').wrap('<section id="loneP"></section>');
		$('section').wrapAll('<div id="rand"></div>');
		$('h1').next('div#iters').remove();
		$('h1').next('div#iters').text('Iterations: DONE!');
		$('h1').after('<div id="iters">Iterations: 0</div>');
		total_section = $('#rand > section').length;
		t = setInterval(function(){
			random = Math.floor(Math.random() * total_section + 1);
			console.log(random);
			$('#rand> section:nth-of-type(' + random + ')').insertBefore('#rand > section:first-of-type');
			$('h1').next('div#iters').text('Iterations: ' + iterations);
			if(++iterations > 15){
				clearInterval(t);
				console.log('Randomization ended');
				$('h1').next('div#iters').text('Iterations: DONE! (15 total)');
			}
		}, 500);
	});
})(jQuery);