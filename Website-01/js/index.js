const profileMenu = document.querySelector('#profileMenu');
const online = document.querySelector('.online');
const showMoreLink = document.querySelector('#showMoreLink');
const sidebarActivity = document.querySelector('#sidebarActivity');


online.addEventListener('click', ()=>{
  profileMenu.classList.toggle('open-menu')
})

showMoreLink.addEventListener('click',()=>{
  sidebarActivity.classList.toggle('open-activity');
  if(sidebarActivity.classList.contains('open-activity')){
    showMoreLink.innerHTML = "Show less <b>-</b>";
  }else{
    showMoreLink.innerHTML = "Show More <b>+</b>";

  }
})