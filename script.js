const navigationWrap = document.querySelector('.navigation-wrap');
window.addEventListener('scroll',function(){
     if(document.documentElement.scrollTop > 20){
          navigationWrap.classList.add('scroll-on');
     }else{
          navigationWrap.classList.remove('scroll-on');
     }
});
const navLink = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse.collapse');
navLink.forEach(function(anchor){
     anchor.addEventListener('click',function(){
          navbarCollapse.classList.remove('show');
     });
});
document.addEventListener('DOMContentLoaded',() => {
     function counter(id,start,end,duration){
          let object = document.getElementById(id);
          let current = start;
          let range = end - start;
          let increment = end > start ? 1 : -1;
          let step = Math.abs(Math.floor(duration / range));
          let timer = setInterval(() => {
               current += increment;
               object.textContent = current;
               if(current == end){
                    clearInterval(timer);
               }
          },step);
     }
     counter('count1',0,1287,3000);
     counter('count2',100,5786,2500);
     counter('count3',0,1440,3000);
     counter('count4',0,7110,3000);
});