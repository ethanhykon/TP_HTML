
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