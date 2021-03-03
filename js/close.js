$(document).ready(function(){
	$("#close").click(function(){
		$("#promo").fadeOut("slow").remove("slow");
	});
});

$(document).ready(function(){
	$("#product").click(function(){
		$(".detail-product").addClass("detail-show");
		$("#promo").fadeOut("slow").show("slow");
	});
});