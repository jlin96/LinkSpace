@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :first_name, :last_name, :birthday, :gender, :bio
        json.friendIds []
        json.authoredPostIds []
        json.authoredCommentIds []
    end
end