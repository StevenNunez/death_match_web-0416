$(function(){
  $("form#new-hero").on('submit', function(eventInfo){
    eventInfo.preventDefault()
    var $form = $(this)
    var name = $form.find('#name').val()
    var superpowers = $form.find('#super_powers').val()
    var description = $form.find('#description').val()
    // Find the dom element with the superhero
    var $destination = $('.heroes')
    // convert the input into some html
    var template = `
    <li>
      ${name} - ${superpowers}
      <div>
        <em>${description}</em>
      </div>
    </li>
    `
    // Insert into the dom
    $destination.append(template)
    $form.trigger('reset')
  })
})
