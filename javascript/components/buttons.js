let bars = document.getElementById("hamburger")
let hamburger = bars
let menu = document.getElementById("menuContent")
let btn = document.getElementById("btn-hamburger")
let icons = ["fa-bars", 'fa-x']
let a = 0;
bark = bars
bark.classList.add("fa-solid", icons[a])

bark.addEventListener('click',function () {
    b = true
       a = 1
      
       bark.classList.toggle( icons[a])
       menu.classList.toggle("d-block")
       btn.classList.toggle("blue")
       
       if (b == true) {
           a = 0
           menu.classList.toggle("d-none")
           bark.classList.toggle( icons[a])
           
          
       }
      
   })