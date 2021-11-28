var btn = document.querySelector('#btn')

function togglesidebar(){
   document.getElementById('menu-list').classList.toggle('active')
}

btn.addEventListener('click', togglesidebar)
