
$(function(){

	$.get("/contacts", function(contacts){
		console.log(contacts)
		// var = contacts.responseJSON
		$("main").append("<ul></ul>");
		_.each(contacts, function(contact){
		var html = 
		html += "<article class='col-md-8 col-md-offset-2'>"
		html += "<div class='row'><h3 id='contactName'>" + contact['name'] + "</h3></div>"
		html += "<div class='row'><div id='image' class='col-md-4 col-md-offset-1'><img src='" + contact['picture'] + "'></div></div>"
		html += "<div class='row'><p>Age: " + contact['age'] + "<br><span class='glyphicon glyphicon-home'> </span>" + contact['address'] + "<br><span class='glyphicon glyphicon-earphone'> </span>" + contact['phone_number'] + "<br></p></div>"			
		
			


			if (contact["category_id"] == "1") {
				$("ul#heroesUl").append(html);
			} else if (contact["category_id"] == "2") {
				$("ul#loveInterestsUl").append(html);
			} else {
				$("ul#memorableCharactersUl").append(html);
			}
		});
	});


		});























