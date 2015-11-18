$( document ).ready(function() {

 	$("img.background").delay(1000).addClass('kenBurns');
 	$(".thank").delay(1000).animate({
 		opacity: '1',
 		top: 0
 	});
 	$(".support").delay(1500).animate({
	 	opacity: '1',
	 	top: '0'
  		});
	$(".support").delay(3000).animate({
	 	opacity: '0'
  		});
	$(".thank").delay(3400).animate({
	 	opacity: '0'
  		});	   	
	$(".why1").delay(5000).animate({
		opacity: '1',
		top: 0
	});
   	$(".why2").delay(5500).animate({
		opacity: '1',
		top: 0
	});
   	$(".why3").delay(6000).animate({
		opacity: '1',
		top: 0
	});
   	$(".why4").delay(6500).animate({
		opacity: '1',
		top: 0
 	});
  
 	$("img.logo").delay(6700).queue(function() { $(this).addClass('logoMove') });
 	$(".cta").delay(8000).queue(function() { $(this).addClass('ctaMove') });


});


