@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :first_name, :last_name, :birthday, :gender, :bio
        json.profile_picture url_for(user.profile_picture)
        json.cover_photo url_for(user.cover_photo)
        json.friendIds []
        json.authoredPostIds []
        json.authoredCommentIds []
    end
end