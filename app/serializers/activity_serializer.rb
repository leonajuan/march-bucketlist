class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :address, :image, :completed, :show_completed

  def show_completed
    if self.object.completed == true
     "✓ ✓ ✓"
    else
      "Not yet completed!"
    end
  end

end
