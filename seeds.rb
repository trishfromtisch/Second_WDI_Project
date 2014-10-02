require 'pry'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'

Category.delete_all
Contact.delete_all

heroes = Category.create(name: "Heroes")
love_interests = Category.create(name: "Love Interests")
memorable_characters = Category.create(name: "Memorable Characters")

Contact.create(
	name: "Happy Gilmore",
	age: 29,
	address: "1880 W Slauson Ave, Los Angeles, CA 90047",
	phone_number: "(323) 296-4465",
	picture: "http://scienceblogs.com/startswithabang/files/2012/09/happygilmore.jpeg"
	category_id: heroes.id,
	)

Contact.create(
	name: "Lucy Whitmore",
	age: 29,
	address: "111 E Puainako St, Hilo, HI 96720",
	phone_number: "(808) 959-2600",
	picture: "http://ia.media-imdb.com/images/M/MV5BMzU2ODg1NzIyNV5BMl5BanBnXkFtZTYwMDYwMzE3._V1_SX640_SY720_.jpg"
	category_id: love_interests.id,
	)

Contact.create(
	name: "Mama Boucher",
	age: 50,
	address: "3400 S I-10 Service Road West Metairie, LA 70001",
	phone_number: "(504) 212-3280",
	picture: "http://www.themoviescene.co.uk/reviews/_img/2582-3.jpg"
	category_id: memorable_characters.id,
	)
