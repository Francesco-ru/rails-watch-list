# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'
require 'json'
Movie.destroy_all
URL = 'http://tmdb.lewagon.com/movie/top_rated?'
json = JSON.parse(open(URL).read)
movies = json['results']

count = 0
movies.each do |movie|
  film = Movie.new(title: movie["title"],
  overview: movie["overview"],
  poster_url: "https://image.tmdb.org/t/p/w500#{movie['poster_path']}",
  rating: movie["vote_average"]
  )
  film.save
  count += 1
  puts "#{count} movies created"
end
