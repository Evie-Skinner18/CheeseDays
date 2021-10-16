class CreateCheeseShops < ActiveRecord::Migration[6.1]
  def change
    create_table :cheese_shops do |t|
      t.string :name
      t.text :location

      t.timestamps
    end
  end
end
