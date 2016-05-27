$(function(){
  // Superhero.all(function(superheros){
  //   heroes.forEach(function(hero){
  //     var $destination = $('.heroes')
  //     // convert the input into some html
  //     var template = `
  //     <li>
  //       ${hero.name} - ${hero.super_powers}
  //       <div>
  //         <em>${hero.description}</em>
  //       </div>
  //     </li>
  //     `
  //     // Insert into the dom
  //     $destination.append(template)
  // })
  //
  // })
  $.getJSON('/superheros', function(heroes){
      heroes.forEach(function(hero){
        var $destination = $('.heroes')
        // convert the input into some html
        var template = `
        <li>
          ${hero.name} - ${hero.super_powers}
          <div>
            <em>${hero.description}</em>
          </div>
        </li>
        `
        // Insert into the dom
        $destination.append(template)
    })
  })
  $("form#new-hero").on('submit', SuperheroController.onFormSubmit)
  $("form#new-hero").on('submit', function(eventInfo){
    eventInfo.preventDefault()
    var $form = $(this)
    var name = $form.find("#name").val()
    var super_powers = $form.find("#super_powers").val()
    var description = $form.find("#description").val()
    var superhero = new Superhero(name, super_powers, description)
    superhero.save(function(hero){
      var $destination = $('.heroes')
      // convert the input into some html
      var template = `
      <li>
        ${hero.name} - ${hero.super_powers}
        <div>
          <em>${hero.description}</em>
        </div>
      </li>
      `
      // Insert into the dom
      $destination.append(template)
    })
    // Find the dom element with the superhero
    $form.trigger('reset')
  })
})

function Superhero(name, super_powers, description){
  this.name = name
  this.super_powers = super_powers
  this.description = description
}

Superhero.prototype.save = function (someCodeToRunLater) {
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
