json.extract! @post, :id, :author_id, :receiver_id, :body, :created_at 

if @post.post_photo.attached?
    json.post_photo url_for(@post.post_photo)
end