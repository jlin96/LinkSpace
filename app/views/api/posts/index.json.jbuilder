@posts.each do |post|
    json.set! post.id do
        json.extract! user, :id, :author_id, :receiver_id, :body, :created_at 
    end
end