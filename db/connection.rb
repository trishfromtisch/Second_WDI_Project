require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :host => "localhost",
  :username => "Trish",
  :database => "contact_list"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)