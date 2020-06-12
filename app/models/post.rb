class Post < ApplicationRecord
    validates :author_id, :receiver_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :receiver,
        foreign_key: :receiver_id,
        class_name: :User

    has_one_attached :post_photo
end