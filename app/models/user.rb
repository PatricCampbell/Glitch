# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true}
  has_attached_file :avatar, default_url: "Kenneth.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message,
    dependent: :destroy

  has_many :channels,
    foreign_key: :creator_id,
    class_name: :Channel,
    dependent: :destroy

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_user_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    password_digest = BCrypt::Password.new(self.password_digest)
    password_digest.is_password?(password)
  end

end
