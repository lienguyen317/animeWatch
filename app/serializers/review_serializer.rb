class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :anime_id
end
