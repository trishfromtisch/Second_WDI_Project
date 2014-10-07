$(function(){

	function buildHtml(contact) {
		var html = "<li class>" + contact['name'] + "  </h3><button class='btn btn-primary btn-xs' data-toggle='modal' data-target='#showModal" + contact["id"] + "'>Deets</button></li>"
				html += "<div class='modal fade' id='showModal" + contact["id"] + "' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
				html += "<div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>&times;</span><span class='sr-only'>Close</span></button>"
				html += "<h3 class='modal-title contactName'>" + contact['name']  + "</h3></div>"
				html += "<div class='modal-body'><div class='row'><div class='col-md-4 col-md-offset-1 image'><img src='" + contact['picture'] + "'></div></div>"
				html += "<div class='row'><div class='col-md-4 col-md-offset-2'><p><div class='age'>Age: " + contact['age'] + "</div><br><span class='glyphicon glyphicon-home'> </span><div class='address'>" + contact['address'] + "</div>"
				html += "<br><span class='glyphicon glyphicon-earphone'> </span><div class='phone'>" + contact['phone_number'] + "</div><br><button type='button' class='" + contact["id"] + " btn btn-primary editToggle'>Edit</button> <button type='button' id='" + contact["id"] + "' class='btn btn-primary delete'>Delete</button></p></div></div>"
				html += "<form style='display:none' role='form' class='" + contact["id"] + " editContact'> <div class='form-group'> "
				html += "<label for='newNameInput'>Name</label> <input type='text' class='form-control newNameInput' placeholder='New Name'> </div>"
				html += "<div class='form-group'> <label for='newAgeInput'>Age</label> <input type='text' class='form-control col-sm-1 newAgeInput' placeholder='New Age'> </div>"
				html += "<div class='form-group'> <label for='newAddressInput'>Address</label> <input type='text' class='form-control newAddressInput' placeholder='New Address'> </div>"
				html += "<div class='form-group'> <label for='newPhoneInput'>Phone Number</label> <input type='tel' class='form-control newPhoneInput' placeholder='xxx-xxx-xxxx'> </div>"
				html += "<div class='form-group'> <label for='newPictureInput'>Picture</label> <input type='text' class='form-control newPictureInput' placeholder='New Image URL'> </div>"
				html += "<div class='form-group'> <label for='newCategoryInput'>New Category</label> <select class='newCategoryInput'> <option value=''>-</option> <option value='1'>Hero</option> <option value='2'>Love Interest</option> <option value='3'>Memorable Character</option> </select><br>"
				html += "<button type='button' class='" + contact["id"] + " btn btn-primary editContactButton'>Save changes</button> </div> </form>"
				html += "<div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>"
		
		if (contact["category_id"] == "1") {
			$("ul#heroesUl").append(html);
		} else if (contact["category_id"] == "2") {
			$("ul#loveInterestsUl").append(html);
		} else {
			$("ul#memorableCharactersUl").append(html);
		}
		addDeleteListeners(contact["id"]);
		addEditListeners(contact["id"]);
		addSaveChangesListener(contact["id"], contact["name"], contact["age"], contact["address"], contact["phone_number"], contact["picture"], contact["category_id"]);
	}

	function initialGet (){
		$.get("/contacts", function(contacts){
			$("main").append("<ul></ul>");
			_.each(contacts, function(contact) {
				buildHtml(contact)
			});
		});
	}

	initialGet()

	function addDeleteListeners(contactID){
		var $deleteContactButton = $("#showModal" + contactID + " button.delete");
		$.ajax({type: "DELETE", url: "/contacts/" + contactID}).done(function(){

		})
	};

	function addEditListeners(contactID) {
				var $editToggle = $("#showModal" + contactID + " button.editToggle");
				$editToggle.on("click", function(){
					$("#showModal" + contactID + " form").toggle("slow");
				});
			};
			
	function addSaveChangesListener(contactID, contactName, contactAge, contactAddress, contactPhone, contactPicture, contactCategory){
		var $editContactButton = $("#showModal" + contactID + " button.editContactButton");
		$editContactButton.on("click", function(){
			console.log("editContactButton clicked")
			var newNameInput = $("#showModal" + contactID + " input.newNameInput");
	   	var newAgeInput = $("#showModal" + contactID + " input.newAgeInput");
	   	var newAddressInput = $("#showModal" + contactID + " input.newAddressInput");
	   	var newPhoneInput = $("#showModal" + contactID + " input.newPhoneInput");
	   	var newPictureInput = $("#showModal" + contactID + " input.newPictureInput");
	   	var newCategoryInput = $("#showModal" + contactID + " select.newCategoryInput");

	   	if (newNameInput.val() != "") {
	   		var newName = newNameInput.val();
	   	} else {
	   		newName = contactName;
	   	}
	   	if (newAgeInput.val() != "") {
	   		var newAge = parseInt(newAgeInput.val());
	   	} else {
	   		newAge = parseInt(contactAge);
	   	}
	   	if (newAddressInput.val() != "") {
	   		var newAddress = newAddressInput.val();
	   	} else {
	   		newAddress = contactAddress
	   	}
	   	if (newPhoneInput.val() != "") {
				var newPhone = newPhoneInput.val();
	   	} else {
	   		newPhone = contactPhone
	   	}
	   	if (newPictureInput.val() != "") {
	   		var newPicture = newPictureInput.val();
	   	} else {
	   		newPicture = contactPicture
	   	}	  	
	  	if (newCategoryInput.val() != "") {
	  	var newCategory = parseInt(newCategoryInput.val())
	  	} else {
	  		newCategory = contactCategory}
	  	console.log(newAddress + newPhone + newPicture + newCategory)
	  	$.ajax({type: "PUT", url: "/contacts/" + contactID, data: {
	  		name: newName,
	  		age: newAge,
	  		address: newAddress,
	  		phone_number: newPhone,
	  		picture: newPicture,
	  		category_id: newCategory
	  	}}).done(function(data){
	  		console.log("sent put request")
	  		$("#showModal" + contactID + " h3").text(data["name"]);
	  		$("#showModal" + contactID + " div.image").html("<img src='" + data['picture'] + "'>");
	  		$("#showModal" + contactID + " div.age").text("Age: " + data['age']);
	  		$("#showModal" + contactID + " div.address").text(data["address"]);
	  		$("#showModal" + contactID + " div.phone").text(data["phone_number"]);

	  	});
	  	$("#showModal" + contactID + " form").trigger("reset");
	  	$("#showModal" + contactID + " form").toggle();
				})
		};
		

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























