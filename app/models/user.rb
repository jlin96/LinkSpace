class User < ApplicationRecord
    validates :first_name, :last_name, :email, :password_digest, :session_token, :birthday, :gender, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token, :ensure_bio

    has_many :authored_posts,
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :received_posts,
        foreign_key: :receiver_id,
        class_name: :Post

    has_one_attached :profile_picture

    has_one_attached :cover_photo

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return ['The email you\'ve entered does not match any account.'] unless user
        user.is_password?(password) ? user : ['The password you\'ve entered is incorrect.']
    end

    def self.email_exist(email)
        user = User.find_by(email: email)
        return false unless user
        return true
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def ensure_bio
        self.bio ||= ''
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end

end