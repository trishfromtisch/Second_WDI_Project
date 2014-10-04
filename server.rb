require 'sinatra'
require_relative './db/connection'
require_relative './lib/category'
require_relative './lib/contact'
require 'active_support'

before do
  if request.request_method == 'OPTIONS'
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "*"

    halt 200
  end
end

after do
  ActiveRecord::Base.connection.close
end



get("/") do
  content_type :html
  send_file File.join(settings.public_folder, 'index.html')
end

get("/categories") do
  content_type :json
  Category.all.to_json
end

get("/categories/:id") do
  content_type :json
  Category.find(params[:id]).to_json(:include => :contacts)
end

post("/categories") do
  content_type :json
  category = Category.create(category_params(params))

  category.to_json
end

put("/categories/:id") do
  content_type :json
  category = Category.find_by(id: params[:id])
  category.update(category_params(params))

  category.to_json
end

delete("/categories/:id") do
  content_type :json
  category = Category.find(params[:id])
  category.destroy
  
  category.to_json
end

get("/contacts") do
  content_type :json
  Contact.all.to_json
end

get("/contacts/:id") do
  content_type :json
  Contact.find_by(params[:id]).to_json
end

post("/contacts") do
  content_type :json
  contact = Contact.create(contact_params(params))
  contact.to_json
end

put("/contacts/:id") do
  content_type :json
  contact = Contact.find(params[:id])
  contact.update(contact_params(params))

  contact.to_json
end

delete("/contacts/:id") do
  content_type :json
  contact = Contact.find(params[:id])
  contact.destroy

  contact.to_json
end

def category_params(params)
  params.slice(*Category.column_names)
end

def contact_params(params)
  params.slice(*Contact.column_names)
end
