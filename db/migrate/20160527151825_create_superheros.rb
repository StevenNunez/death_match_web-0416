class CreateSuperheros < ActiveRecord::Migration
  def change
    create_table :superheros do |t|
      t.string :name
      t.string :super_powers
      t.string :description

      t.timestamps null: false
    end
  end
end
