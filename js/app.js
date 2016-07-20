$(function () {
	$.ajax({
		url:"http://gateway.marvel.com/v1/public/characters",
		data:{
			ts:1,
			apikey: "20e2658c242e5fb2ee8893832cd647a7",
			hash: "fe75a381ca79b0376855fe39471deeaf"
		}
	})
	.done(function(response, textStaus){
		debugger;
	})
	.fail(function(){
		console.log("error")
	})
});