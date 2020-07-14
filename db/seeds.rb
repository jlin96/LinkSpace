require 'faker'
require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(
    first_name: "Jesse", 
    last_name: "Lin", 
    email: "jesselin@gmail.com", 
    password: "password", 
    gender: "M", 
    birthday: "1999-1-1"
)

user2 = User.create!(
    first_name: "Raymond",
    last_name: "Hua",
    email: "raymondhua@gmail.com",
    password: "1234567",
    gender: "M",
    birthday: "2000-12-25"
)

def birthday_generator ()
    year = rand(1905..2020)
    month = rand(1..12)

    if [1,3,5,7,8,10,12].include?(month)
        day = rand(1..31)
    elsif [4,6,9,11].include?(month)
        day = rand(1..30)
    else
        if year % 4 == 0
            day = rand(1..29)
        else
            day = rand(1..28)
        end
    end
    "#{year}-#{month}-#{day}"
end

10.times do
    User.create!(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        password: 'password',
        gender: Faker::Gender.short_binary_type.upcase,
        bio: [Faker::Quote.famous_last_words, ''].sample,
        birthday: birthday_generator()
    )
end

User.all.each do |user|
    profile = open('https://linkspace-seeds.s3.amazonaws.com/facebook_default.png')
    cover = open('https://linkspace-seeds.s3.amazonaws.com/cover_default.png')  
    user.profile_picture.attach(io: profile, filename: 'facebook_default.png')
    user.cover_photo.attach(io: cover, filename: 'cover_default.png')
end

# post1 = Post.create!(
#     author_id: 1,
#     receiver_id: 1,
#     body: 'hello self'
# )
# post2 = Post.create!(
#     author_id: 2,
#     receiver_id: 1,
#     body: 'hello jesse - r'
# )

# post3 = Post.create!(
#     author_id: 1,
#     receiver_id: 2,
#     body: 'hello raymond - j'
# )
# post4 = Post.create!(
#     author_id: 2,
#     receiver_id: 2,
#     body: 'hello self r'
# )

5.times do 
  Post.create!(
    author_id: rand(1..2),
    receiver_id: rand(1..2),
    body: Faker::Quote.famous_last_words
  )
end 