window.onload = () =>  {
  
    function grabPoke() {
    let query = $("#text").val().toLowerCase();
      
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then(response => {
        if(response.ok) {
          
            return response.json()
        } else {
          
          alert('Certifique-se de que o nome ou ID do Pokémon foi digitado corretamente.')
        }
    })
      .then((out) => {
       console.log(out)
      
    let number = out.id;  
    let name = out.species.name.toUpperCase();
    let pic = out.sprites.front_default;
    let type = out.types.map((type) => type.type.name).join(', ').toUpperCase();
    let abilities = out.abilities.map((ability) => ability.ability.name).join(', ').toUpperCase();

    //exemplo de Arrow Function
    //var numbers = [1,2,3];
   //squares = numbers.map(x => x * x);

   //é o mesmo que
   //squares = numbers.map(function (x) { return x * x });

      
       
    let hp = out.stats[5].base_stat;
    let attack = out.stats[4].base_stat;
    let defense = out.stats[3].base_stat;
    let speed = out.stats[0].base_stat;
      
      
      document.getElementById("number").innerHTML = "# " + number;
      document.getElementById("poke_pic").src = pic;
      document.getElementById("name").innerHTML = name;
      document.getElementById("type").innerHTML = "TYPE: " + type;
      document.getElementById("abilities").innerHTML = "ABILITIES: " + abilities;
      
      document.getElementById("hp").innerHTML = "BASE HEALTH: " + hp;
      document.getElementById("attack").innerHTML = "ATTACK: " + attack;
      document.getElementById("defense").innerHTML = "DEFENSE: " + defense;
      document.getElementById("speed").innerHTML = "SPEED: " + speed;
            
    })
        
    }
  
    $("#text").keyup(function(event) {
      if (event.keyCode === 13) {
          $("#submit").click();
      }
  });
        document.getElementById('submit').addEventListener("click", function()
    {
        
        grabPoke();
      })
  }
  