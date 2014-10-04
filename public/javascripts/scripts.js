function getCategoryName(id) {
	$.get("/categories/" + id, function(response){
		var categoryName = response["name"]
	})
	return categoryName
}

var NameView = Backbone.View.extend({
	tagName: "li",
	template: _.template("<div class='contactName'><a href='/#show/<%= this.id %>''><%= this.name %> </a></div>"),

	initialize: function(contactHash){
		this.name = contactHash.name;
		this.render();
	},
	render: function(){
		this.$el.html( this.template(this.attributes));
	}
});

var WholeView = Backbone.View.extend({
	tagName: "div",
	className: "wholeView",
	template: _.template('<article class="col-md-8 col-md-offset-2">'),
			// <div class="row">
			// 	<h3 id="contactName"><%=this.name%></h3>
			// </div>
			// <div class="row">
			// 	<div id="image" class="col-md-4 col-md-offset-1">
			// 		<img src="<%=this.picture%>">
			// 	</div>
			// </div>
			// <div class="row">
			// 	<h4 id= "categoryName"><%=this.category_name%></h4>
			// </div>
			// <div class="row">
			// 	<p>Age: <%=this.age%><br>
			// 		<span class="glyphicon glyphicon-home"> </span><%=this.address%><br>
			// 		<span class="glyphicon glyphicon-earphone"> </span><%=this.phone_number%><br>
			// 	</p>
			// </div>'),

	initialize: function(contactHash){
		this.name = contactHash.name;
		this.age = contactHash.age;
		this.address = contactHash.address;
		this.phone_number = contactHash.phone_number;
		this.picture = contactHash.picture;
		this.category_name = contactHash.category_name;

		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.attributes));
	}
});

function getAndNameViews() {
	$.get("/contacts", function(contacts){
		_.each(contacts, function(contact){
			var view = new NameView({id: contact["id"], name: contact["name"]})
			$("ul").append(view.el)
		})
	})
}




function getAndWholeView(id) {
	$.get("/contacts/" + id, function(response){

			var wholeView = new WholeView({
				id: response["id"],
			 name: response["name"],
			 age: response["age"],
			 address: response["address"],
			 phone_number: response["phone_number"],
			 picture: response["picture"],
			 category_name: getCategoryName(response["category_id"])
			})
			$("main").append(view.el)
		
	})
}



$(function(){
console.log(getCategoryName(1))

	var AppRouter = Backbone.Router.extend({

		routes: {
			"" : "index",
			"see_contacts": "index",
			"show/:id" : "show",
			"*other" : "default"
		},
		index: function(){
			console.log("index")
		},
		show: function(id){
			console.log("showing contact #" + id)
			getAndWholeView(id)
		},
		default: function(other){
			console.log(other + "does not exist.")
		}
	});

	var appRouter = new AppRouter();

	appRouter.on("route:index", function(){
		console.log("index hit");
		$("main").append("<ul></ul>");
		getAndNameViews();
	});

	

	Backbone.history.start();


































})