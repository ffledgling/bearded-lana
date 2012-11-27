$(document).ready(function() {
	flag = 0;
	var id;
	$(".revert").bind("click",function(){
		$("#"+id).revertFlip();
		return false;
	});

	//Get the screen height and width
	function maskit(){
	}		// executing this async. :-/

	function reverseit(){
		//		alert('haha');
	}

	$(".content").click(function (){
		id = $(this).attr('id');
		$(this).flip({
			content: '<br/> lola',
			color:'#00FF00',
			direction: 'lr',
			onEnd: function (){
				flag = flag + 1;
				if(flag % 2 == 1 ){
					var maskHeight = $(document).height();
					var maskWidth = $(window).width();
					//	alert(maskHeight);
					$('#mask').css({'width':maskWidth,'height':maskHeight});	
					$('#mask').fadeTo("slow",0.8);
					$('.window').html(function(){
						var content = $("#"+id).html();
						content = String(content)+"<div class='close'> </div>";
						$('.close').live('click',function(){
							$('.window').hide();
							$('#mask').hide();
							flag = 1;
							$("#"+id).revertFlip();
							return false;
						});
						return String(content);
					});
					$('.window').css('top',200);
					$('.window').css('left',450);
					var content = $('.window').html();
					$('.window').fadeIn(300); 
				}
			}
		});
	});

	$('#mask').click(function (){
		$(this).hide();
		$('.window').hide();
		flag = 1;
		$("#"+id).revertFlip({
		})		// onEnd etc not defined for revertflip
		return false;
	});
});
