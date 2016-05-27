// Create a function we'll use as our constructor
function SuperheroController(){ }
// Start everything.
SuperheroController.prototype.init = function () {
  this.loadAll(".heroes")

  // jquery sets `this` to be the thing that triggered the event
  // We use proxy so that function keeps THIS OBJECT as this
  $("form#new-hero").on('submit', $.proxy(this.create, this))
};

// Load all heroes and put them inside whatever element you pass it
SuperheroController.prototype.loadAll = function(element){
  var $destination = $(element)
  Superhero.all(function(heroes){
    var rendered = SuperheroView.index(heroes)
    $destination.append(rendered)
  })
}

// create function handles on submit.
SuperheroController.prototype.create = function(event) {
  event.preventDefault()
  var $form = $(event.target)
  // ... is destructruring https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  // think splats in Ruby
  // ES2015 feature so be careful
  // https://kangax.github.io/compat-table/es6/
  var superhero = new Superhero(...this.formValues($form))

  superhero.save(function(hero){
    var $destination = $('.heroes')
    var rendered = SuperheroView.show(hero)
    $destination.append(template)
    $form.trigger('reset');
  })
}

SuperheroController.prototype.formValues = function(form) {
  var name = form.find("#name").val()
  var super_powers = form.find("#super_powers").val()
  var description = form.find("#description").val()
  return [name, super_powers, description]
};
