class AddToUserTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :language_data, :object
    add_column :users, :language_strength, :integer
    add_column :users, :site_streak, :integer
    add_column :users, :languages, :array
    add_column :users, :learning_language, :string
    add_column :users, :learning_language_string, :string
    add_column :users, :rupees, :integer
  end
end
