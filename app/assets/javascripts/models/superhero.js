function Superhero(name, super_powers, description){
  this.name = name
  this.super_powers = super_powers
  this.description = description
}

Superhero.prototype.save = function(someCodeToRunLater) {
  $.post("/superheros", this.toParam(), someCodeToRunLater)
};

Superhero.prototype.toParam = function () {
  return {
    superhero: {
      name: this.name,
      super_powers: this.super_powers,
      description: this.description
    }
  }
};

Superhero.all = function(callback){
  $.getJSON("/superheros", callback)
}
