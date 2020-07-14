class Post < ApplicationRecord
    validates :author_id, :receiver_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :receiver_id,
        class_name: :User
    
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    has_one_attached :post_photo
end