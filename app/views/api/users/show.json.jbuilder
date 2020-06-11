json.extract! @user, :first_name, :last_name, :email, :birthday, :gender, :id, :bio
json.profile_picture url_for(@user.profile_picture)
json.cover_photo url_for(@user.cover_photo)
json.friendIds []
json.authoredPostIds []
json.authoredCommentIds []