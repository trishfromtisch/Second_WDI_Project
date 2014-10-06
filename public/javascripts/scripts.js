$(function(){

	$.get("/contacts", function(contacts){
		console.log(contacts)
		// var = contacts.responseJSON
		$("main").append("<ul></ul>");
		_.each(contacts, function(contact){
			var html = "<li>" + contact['name'] + "</h3><button class='btn btn-primary btn-xs' data-toggle='modal' data-target='#showModal" + contact["id"] + "'>Deets</button></li>"
			html += "<div class='modal fade' id='showModal" + contact["id"] + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
			html += "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>"
			html += "<h3 class='modal-title contactName'>" + contact['name']  + "</h3></div>"
			html += "<div class='modal-body'><div class='row'><div class='col-md-4 col-md-offset-1 image'><img src='" + contact['picture'] + "'></div></div>"
			html += "<div class='row'><p>Age: " + contact['age'] + "<br><span class='glyphicon glyphicon-home'> </span>" + contact['address']
			html += "<br><span class='glyphicon glyphicon-earphone'> </span>" + contact['phone_number'] + "<br></p></div></div>"
			html += "<div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>"
			html += "<button type='button' class='btn btn-primary'>Save changes</button></div></div></div></div>"

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























