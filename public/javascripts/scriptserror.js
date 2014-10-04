$(function(){
// var NameView = Backbone.View.extend({
// 	tagName: "li",
// 	template: _.template("<div class='contactName'><a href='/#show/:<%= id %>''><%= name %> </a></div>"),

// 	initialize: function(){
// 		this.listenTo(this.model, "change", this.render);
// 		this.listenTo(this.model, "destroy remove", this.remove);
// 	},
// 	render: function(){
// 		this.$el.html( this.template(this.model.attributes));
// 	}
// });

// var ContactModel = Backbone.Model.extend({
// 	urlRoot: '/contacts'
// });

// var ContactCollection = Backbone.Collection.extend({
// 	url: "/contacts",
// 	model: "ContactModel"
// })

// var IndexView = Backbone.View.extend({
// 	initialize: function() {
// 		this.listenTo(this.collection, "add", this.addContact);
// 		collection.fetch();
// 	},
// 	addContact: function(contact) {
// 		var view = new NameView({model: ContactModel});
// 		view.render();
// 		this.$el.append(view.el);
// 	}
// });

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
	},
	default: function(other){
		console.log(other + "does not exist.")
	}
});

var appRouter = new AppRouter();

appRouter.on("route:index", function(){
	console.log("woot, index");
	$("main").append("<h3>Alva</h3>")
// 	var ContactModel = Backbone.Model.extend({
// 	urlRoot: '/contacts'
// 	});

// 	var ContactCollection = Backbone.Collection.extend({
// 	url: "/contacts",
// 	model: "ContactModel"
// 	})
// 	var collection = new ContactCollection;
// 	var IndexView = Backbone.View.extend({
// 	initialize: function() {
// 		this.listenTo(this.collection, "add", this.addContact);
// 		collection.fetch();
// 	},
// 	addContact: function(contact) {
// 		var view = new NameView({model: ContactModel});
// 		view.render();
// 		this.$el.append(view.el);
// 	}
// });
// 	var NameView = Backbone.View.extend({
// 		tagName: "li",
// 		template: _.template("<div class='contactName'><a href='/#show/:<%= id %>''><%= name %> </a></div>"),
// 		initialize: function(){
// 			this.listenTo(this.model, "change", this.render);
// 			this.listenTo(this.model, "destroy remove", this.remove);
// 		},
// 		render: function(){
// 			this.$el.html( this.template(this.model.attributes));
// 		}
// 	});

// 	var indexView = new IndexView({collection: collection, el: $("main")});
// 	var nameView = new NameView({model: ContactModel})
});



Backbone.history.start();







});
