class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :beer_type
      t.number :strength
      t.string :country
      t.string :flavourProfile
    end
  end
end