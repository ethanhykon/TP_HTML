
// nav button menu 
const btn = document.getElementById('btn_menu')
const btn_opn = document.getElementById('btn_opn')
    const btn_cls = document.getElementById('btn_cls')
const mb_navbar =document.getElementById('mobile_menu') 

btn.addEventListener('click', function(){
    
    console.log('bouton cliqué !');
    btn_cls.classList.toggle('hidden'); 
    btn_cls.classList.toggle('block');
    btn_opn.classList.toggle('hidden');
    btn_opn.classList.toggle('block'); 
    
    console.log(btn_cls);
    console.log(btn_opn);
    console.log(mb_navbar);

    
    if (mb_navbar.classList.contains('hidden')) {
        mb_navbar.classList.remove('hidden');
        
      } else {
        mb_navbar.classList.add('hidden');
        
      } 

})

// scroll padding

const navigation = document.querySelector("nav");

const navigation_height = navigation.offsetHeight;

document.documentElement.style.setProperty("--scroll-padding",
  navigation_height + "px"
);



// form verification

const form_name = document.getElementById('name');
const email = document.getElementById('email');
const btn_form = document.getElementById('btn_form');
const reg_nom = new RegExp("^[A-Za-zÀ-ÿ-]+$");
const reg_mail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");

const er_mail = document.getElementById('er_mail')
const er_nom = document.getElementById('er_nom')

btn_form.addEventListener("click", valid);

function valid(e) {
  
 let verif_nom = false;
 let valid_mail =false;
 
  if (reg_nom.test(form_name.value)   ) {
    verif_nom = true;
 
  }

  if (reg_mail.test(email.value)   ) {
   
    valid_mail = true;
    
  }
  
  switch (true) {
  case valid_mail  && verif_nom :
    console.log("Les deux variables sont vraies.");
     
      
    break;
  case !valid_mail  && verif_nom :
    console.log("var1 est fausse et var2 est vraie.");
    er_mail.classList.add('block')
    er_mail.classList.remove('hidden')

    er_nom.classList.add('hidden')
    er_nom.classList.remove('block')


   // btn_cls.classList.toggle('hidden');
     e.preventDefault();
    break;
   
    case valid_mail && !verif_nom:
      console.log("valid_mail est vraie et verif_nom est fausse.");
      e.preventDefault();
      er_nom.classList.add('block')
      er_nom.classList.remove('hidden')

      er_mail.classList.add('hidden')
      er_mail.classList.remove('block')

      break;
  
      case !valid_mail  && !verif_nom :
    console.log("Les deux variables sont fausses.");
     e.preventDefault();
     er_nom.classList.add('block')
     er_nom.classList.remove('hidden')
     er_mail.classList.add('block')
     er_mail.classList.remove('hidden')
    break;
  
    default:
    console.log("Cas par défaut.");
    e.preventDefault();
    break;
}
  
}

//   scroll-padding: var(--scroll-padding,5rem); 

//poke api




  const poke_url = "https://pokeapi.co/api/v2/pokemon/";
  

 window.onload = function(){
 fetchPokemonData();
    };
    async function fetchPokemonData() {
      
      try {
        const base_poke = poke_url + "25" ;
      
        const response = await fetch(base_poke);
        
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const pokemon = await response.json();
        displayPokemonCard(pokemon);
      } catch (error) {
        console.log("ereur avec le pokemon :" + error  );
      }
    }

    
    
     async function random_poke(){
      let i = Math.floor(Math.random() * 1025);
      console.log(i);

      try{
        const base_poke = poke_url + i;

      const response = await fetch(base_poke);
      let desc_fr_1 = document.getElementById("pokemon_desc");
      let typesDiv = document.getElementById("pokemon_type");
      
      while (typesDiv.firstChild) {
          typesDiv.firstChild.remove();
          
      }

      while (desc_fr_1.hasChildNodes()) {
        desc_fr_1.firstChild.remove();
      } 



        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const pokemon = await response.json();
        
        
        displayPokemonCard(pokemon);
    }
        
       catch (error) {
        console.log("ereur avec le pokemon :" + error  );
      }

    }; 


    async function search_pokemon(){
      let search = document.getElementById("search_poke");
      let search_1 = document.getElementById("search_poke_1");

     

      let filled_Field 
      if (search.value.trim() !== "") {
          filled_Field = search.value;


      } else if (search_1.value.trim() !== "") {
          filled_Field = search_1.value;
          

      } else{
        document.getElementById("er_pokemon").innerText = " veuillez mettre le nom ou l'id de votre pokemon !!!!";
        document.getElementById("er_pokemon_1").innerText = " veuillez mettre le nom ou l'id de votre pokemon !!!";
        return
      }
  
      try {
        const search_data = poke_url + filled_Field;
       
        const response = await fetch(search_data);
        if (!response.ok) {
          document.getElementById("er_pokemon").innerText = " aucun pokemon trouvé  ";
          document.getElementById("er_pokemon_1").innerText = " aucun pokemon trouvé ";
            throw new Error(`Erreur HTTP: ${response.status}`);
          

          } else{
            document.getElementById("er_pokemon").innerText = "";
          document.getElementById("er_pokemon_1").innerText = "";
          }
          
        let desc_fr_1 = document.getElementById("pokemon_desc");
        let typesDiv = document.getElementById("pokemon_type");
        
        while (typesDiv.firstChild) {
            typesDiv.firstChild.remove();
            
        }
  
        while (desc_fr_1.hasChildNodes()) {
          desc_fr_1.firstChild.remove();
        } 
  
  
  
          
          const pokemon = await response.json();
          
          
          displayPokemonCard(pokemon);
      }
          
         catch (error) {
          console.log("ereur avec le pokemon :" + error  );

        }
      }



    





    async function displayPokemonCard(pokemon){
      //console.log(pokemon);

      const pokemon_name = pokemon["name"].toUpperCase();
      document.getElementById("pokemon_nom").innerText = pokemon_name;
      
      
      const pokemon_type = pokemon["types"];
      console.log(pokemon_type);

      let type_div = document.getElementById("pokemon_type");
      for(let i = 0; i < pokemon_type.length; i++){
        let type = document.createElement("span");
        type.innerText = pokemon_type[i]["type"]["name"].toUpperCase();
        type.classList.add(pokemon_type[i]["type"]["name"]);
        type.classList.add("rounded-full");
        type.classList.add("border-solid");
        type.classList.add("border-black");
        type.classList.add("border-2");
        type.classList.add("w-[200px]");
        type.classList.add("lg:mx-2");
        type.classList.add("text-center");
      
        
        type_div.append(type);
        console.log(type)

      }

      const pokemon_sprite = pokemon["sprites"]["front_default"];
       document.getElementById("pokemon_img").src = pokemon_sprite;
      document.getElementById("pokemon_img2").src = pokemon_sprite;
      
      
      let res = await fetch(pokemon["species"]["url"]);
      const pokemon_desc = await res.json();
      // console.log(pokemon_desc);
      
      const pokemon_desc_fr = pokemon_desc.flavor_text_entries.filter(entry => entry.language.name === "fr");
      console.log(pokemon_desc_fr);

      const uniqueDescriptions = new Set();
pokemon_desc_fr.forEach(entry => uniqueDescriptions.add(entry.flavor_text));




      let desc_fr_1 = document.getElementById("pokemon_desc");

      if (uniqueDescriptions.size >0 ){

        const uniqueDescriptionsArray = Array.from(uniqueDescriptions);
        for(let i = 0; i < Math.min(3, uniqueDescriptionsArray.length); i++){
          let desc_fr =  document.createElement("div");
          
          desc_fr.innerText = uniqueDescriptionsArray[i];
          
          
          desc_fr_1.append(desc_fr);
          console.log(desc_fr)

        }

      } else{
        const pokemon_desc_err = " Pas de déscription fr disponible pour ce pokémon :D"
        document.getElementById("pokemon_desc").innerText = pokemon_desc_err;
      }
      
      

    };