$(function(){

	$.get("/contacts", function(contacts){
		$("main").append("<ul></ul>")
		_.each(contacts, function(contact){
			$("ul").append(
				"<article class='col-md-8 col-md-offset-2'>
			<div class='row'>
				<h3 id='contactName'>contact['name']</h3>
			</div>
			<div class='row'>
				<div id='image' class='col-md-4 col-md-offset-1'>
					<img src='contact['picture']'>
				</div>
			</div>
			<div class='row'>
				<h4 id= 'categoryName'>contact['category_name']</h4>
			</div>
			<div class='row'>
				<p>Age: contact['age']<br>
					<span class='glyphicon glyphicon-home'> </span>contact['address']<br>
					<span class='glyphicon glyphicon-earphone'> </span>contact['phone_number']<br>
				</p>
			</div>"	)
		})
	})


		});


























});