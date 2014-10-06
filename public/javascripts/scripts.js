$(function(){

	function buildHtml(contact) {
		var html = "<li>" + contact['name'] + "  </h3><button class='btn btn-primary btn-xs' data-toggle='modal' data-target='#showModal" + contact["id"] + "'>Deets</button></li>"
				html += "<div class='modal fade' id='showModal" + contact["id"] + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
				html += "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>"
				html += "<h3 class='modal-title contactName'>" + contact['name']  + "</h3></div>"
				html += "<div class='modal-body'><div class='row'><div class='col-md-4 col-md-offset-1 image'><img src='" + contact['picture'] + "'></div></div>"
				html += "<div class='row'><div class='col-md-4 col-md-offset-2'><p>Age: " + contact['age'] + "<br><span class='glyphicon glyphicon-home'> </span>" + contact['address']
				html += "<br><span class='glyphicon glyphicon-earphone'> </span>" + contact['phone_number'] + "<br><button type='button' class='btn btn-primary edit'>Edit</button> <button type='button' id='" + contact["id"] + "' class='btn btn-primary delete'>Delete</button></p></div></div>"
				html += "<form style='display:none' role='form' class='editContact'> <div class='form-group'> "
				html += "<label for='newNameInput'>New Name</label> <input type='text' class='form-control' id='newNameInput' placeholder='Name'> </div>"
				html += "<div class='form-group'> <label for='newAgeInput'>Age</label> <input type='text' class='form-control col-sm-1' id='newAgeInput' placeholder='Age'> </div>"
				html += "<div class='form-group'> <label for='newAddressInput'>Address</label> <input type='text' class='form-control' id='newAddressInput' placeholder='Address'> </div>"
				html += "<div class='form-group'> <label for='newPhoneInput'>Phone Number</label> <input type='tel' class='form-control' id='newPhoneInput'> </div>"
				html += "<div class='form-group'> <label for='newPictureInput'>Picture</label> <input type='text' class='form-control' id='newPictureInput' placeholder='Image URL'> </div>"
				html += "<div class='form-group'> <label for='newCategoryInput'>Category</label> <select id='newCategoryInput'> <option value='1'>Hero</option> <option value='2'>Love Interest</option> <option value='3'>Memorable Character</option> </select>"
				html += "<button type='button' class='" + contact["id"] + "btn btn-primary editContactButton'>Save changes</button> </div> </form>"
				html += "<div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>"


		if (contact["category_id"] == "1") {
			$("ul#heroesUl").append(html);
		} else if (contact["category_id"] == "2") {
			$("ul#loveInterestsUl").append(html);
		} else {
			$("ul#memorableCharactersUl").append(html);
		}
	}

	function initialGet (){
		$.get("/contacts", function(contacts){
			$("main").append("<ul></ul>");
			_.each(contacts, function(contact) {
				buildHtml(contact)});
		});
	}

	initialGet()


	$('#addContactButton').click(function(){
		var nameInput = $("#nameInput");
   	var ageInput = $("#ageInput");
   	var addressInput = $("#addressInput");
   	var phoneInput = $("#phoneInput");
   	var pictureInput = $("#pictureInput");
   	var categoryInput = $("#categoryInput");
  	var name = nameInput.val();
  	var age = parseInt(ageInput.val());
  	var address = addressInput.val();
  	var phone = phoneInput.val();
  	var picture = pictureInput.val();
  	var category = parseInt(categoryInput.val());
  	console.log(name + age + address + phone + picture + category)
  	$.post("/contacts", {
  		name: name,
  		age: age,
  		address: address,
  		phone_number: phone,
  		picture: picture,
  		category_id: category
  	}).done(function(data){
  		console.log(data + "received"); 		
  		buildHtml(data);
  		$('#addCharacter').trigger("reset");
  	}
  	);
	});






});























