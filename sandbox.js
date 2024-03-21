const bar_icon = document.querySelector('#bar-icon');
const sidebar = document.querySelector('.sidebar');
const xmark = document.querySelector('.xmark');


bar_icon.addEventListener('click',(e)=>
{
   sidebar.style.display='flex';
});

xmark.addEventListener('click',(e)=>{
   sidebar.style.display='none';
});
