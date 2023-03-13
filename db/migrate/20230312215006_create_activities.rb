class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|

      t.string :name
      t.string :location
      t.string :address 
      t.string :image
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end
