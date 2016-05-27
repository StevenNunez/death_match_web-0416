function SuperheroView(){ }

SuperheroView.index = function(heroes, destination){
  return heroes.map(function(hero){
    return template = `
      <li>
      ${hero.name} - ${hero.super_powers}
      <div>
      <em>${hero.description}</em>
      </div>
      </li>
      `
  })
}

SuperheroView.show = function(hero){
    return template = `
                    <li>
                    ${hero.name} - ${hero.super_powers}
                    <div>
                    <em>${hero.description}</em>
                    </div>
                    </li>
                    `
}
