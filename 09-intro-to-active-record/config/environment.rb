require 'bundler'
Bundler.require

# DB = SQLite3::Database.new('db/library.db')

require_relative '../lib/book.rb'
require_relative '../lib/author.rb'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/library.db"
)

ActiveRecord::Base.logger = Logger.new(STDOUT)