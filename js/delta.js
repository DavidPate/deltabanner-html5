(function ($) {

 	$("img.background").delay(1000).addClass('kenBurns');
 	$(".thank").delay(1000).animate({
 		opacity: '1'
 	});
 	$(".support").delay(1500).animate({
	 		opacity: '1',
	 		top: '0'
 		}, function() {
 			console.log('booga');
	    	$(".thank, .support").delay(2500).fadeOut("slow");
 		   	$(".why1").delay(2300).animate({
 				opacity: '1'
 			});
 		   	$(".why2").delay(2700).animate({
 				opacity: '1'
 			});
 		   	$(".why3").delay(3100).animate({
 				opacity: '1'
 			});
 		   	$(".why4").delay(3500).animate({
 				opacity: '1'
 			});
  		}
 	);
 	console.log('whda?');
 	$("img.logo").delay(6750).queue(function() { $(this).addClass('logoMove') });
 	$("a.cta").delay(8000).queue(function() { $(this).addClass('ctaMove') });


}(jQuery));


