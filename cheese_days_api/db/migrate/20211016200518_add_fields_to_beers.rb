class AddFieldsToBeers < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :name, :string
    add_column :beers, :beer_type, :string
    add_column :beers, :strength, :integer
    add_column :beers, :country, :string
    add_column :beers, :flavour_profile, :string
  end
end
