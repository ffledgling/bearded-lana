$(document).ready(function(){
	$(".content").click(function(){
		$(this).flip({
			content: '<br/> lola',
		color:'#00FF00',
		direction: 'lr',
		onEnd: function (){ 
			$(".content").animate({
				marginTop: "+=50px",          
			height: "+=50px",
			width: "+=50px",
			marginLeft: "+=50px"
			}, 1000);
		}});

	});
});
