
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



// form verificatioon

