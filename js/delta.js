$( document ).ready(function() {

 	$("img.background").delay(1000).addClass('kenBurns');
 	$(".head").delay(1000).animate({
 		opacity: '1',
 		top: 0
 	});
 	$(".subhead").delay(1500).animate({
	 	opacity: '1',
	 	top: '57px'
  		});
	$(".subhead").delay(3000).animate({
	 	opacity: '0'
  		});
	$(".head").delay(3400).animate({
	 	opacity: '0'
  		});	   	
	$(".text1").delay(5000).animate({
		opacity: '1',
		top: '10px'
	});
   	$(".text2").delay(5500).animate({
		opacity: '1',
		top: 0
	});
   	$(".text3").delay(6000).animate({
		opacity: '1',
		top: 0
	});
   	$(".text4").delay(6500).animate({
		opacity: '1',
		top: 0
 	});
  
 	$("img.logo").delay(6700).queue(function() { $(this).addClass('logoMove') });
 	$(".cta").delay(8000).queue(function() { $(this).addClass('ctaMove') });


});


