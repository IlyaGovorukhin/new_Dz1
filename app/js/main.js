$(document).ready(function() {
	var box = "<div><p>доуумент обрабатывается</p></div>";


$(".button1").click(function(){

	var posName = $("#name").val();
	var posEmail = $("#email").val();
	var posText = $("#texarial").val();
	$.ajax({
			type: "POST",
	        url: "js/send.php",
		    data: {"posName": posName, "posEmail": posEmail, "posText": posText},
		    cache: false,
		    success: function(response) {
				var messageResp = "<p>Спасибо, </p>";
				var resultStat = "!</strong> . Ваше сообщение отправлено!</p>";
				var oll = (messageResp + posName + resultStat);
				if(response == 1){
					$("#loadBar").html(oll).fadeIn(3000);
					$("#posName").val("");
					$("#posEmail").val("");
					$("#posText").val("");
				} else {
					$("#loadBar").html(response).fadeIn(3000); }
			}


	});
	return false;


});

});