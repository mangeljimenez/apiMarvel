$(function () {
	var template = '<div class="card">'+
						'<div><img src=":img:" alt=":img:" class="card-img">'+
							'<p class="card-name">:name:</p>'+
						'</div>'+
						'</div>';
	$.ajax({
		url:"http://gateway.marvel.com/v1/public/characters",
		data:{
			ts:-5,
			apikey: "20e2658c242e5fb2ee8893832cd647a7",
			hash: "49814734893fdafb6f50ef03f606da60"
		}
	})
	.done(function(response, textStaus){
		var personajes = response.data.results;
		personajes.forEach(function(personaje){
			var card = template
				.replace(":name:",personaje.name)
				.replace(":img:",personaje.thumbnail.path + '.' + personaje.thumbnail.extension);

				$("#app-body").find(".cards")
					.append($(card));
		});
	})
	.fail(function(){
		console.log("error")
	})
});