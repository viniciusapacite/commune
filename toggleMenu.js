



 function menuAbrir(){
     var menu = document.querySelectorAll('.toggle-menu');
     for(var i = 0; i < menu.length; i++){
         menu[i].addEventListener('click', ()=>{
             var nav = document.querySelectorAll('nav.toggle-bar');
             for(var i = 0; i < nav.length; i++){
                 // nav[i].style.display = 'flex';
                 if(nav[i].style.display == 'none'){
                     nav[i].style.display = 'flex';
                     nav[i].style.transition = '2s all';
                 }
                 else{
                     nav[i].style.display ='none';
                     nav[i].style.transition = '1s all';
                 }
             }
         })
     }
 }

 menuAbrir();

   


        
       
  
