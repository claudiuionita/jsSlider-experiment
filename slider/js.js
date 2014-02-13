
function imgSliderPrepare(){

	$('img:eq(0)').addClass('visible');
	$('img:gt(0)').addClass('hidden');

}


function manualSliderExecution() {

	$('.next').click(function(){
		$('.visible').next().addClass('visible').removeClass('hidden');
		$('.visible').prev().addClass('hidden').removeClass('visible');
	});

	$('.prev').click(function(){
		$('.visible').prev().addClass('visible').removeClass('hidden');
		$('.visible').next().addClass('hidden').removeClass('visible');
	});

}

function autoSliderExecution() {

	$('.visible').next().addClass('visible').removeClass('hidden');
	$('.visible').prev().addClass('hidden').removeClass('visible');
	
	if ($('.slider-wrapper img:last').hasClass('visible')) {
	
	setTimeout(function() {
	$('img').removeClass('visible hidden');
	imgSliderPrepare();
	}, 3000);
	


	}

}
setInterval(autoSliderExecution, 3000);

function bootstrapEnhancements(){

 $('img').addClass('img-responsive');

}



$(document).ready(function(){

try{imgSliderPrepare()} catch(err){};
try{manualSliderExecution()} catch(err){};
try{bootstrapEnhancements()} catch(err){};


});
