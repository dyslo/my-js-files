var menus = document.querySelectorAll('.dropdown-menu');
var menuitems = document.querySelectorAll('.dropdown-content');
for(var i=0; i<menuitems.length; i++){
    menuitems[i].classList.add('hide');
}

for(var i=0; i<menus.length; i++){
    var el = document.querySelector('div.dropdown-content[data-menu='+menus[i].dataset.menu+']');
    menus[i].addEventListener('click', function() {
        el.classList.toggle('hide');
    }, true);
}

window.onclick = function(e) {
    //console.log(e);
    if(!e.target.parentNode.matches('div.dropdown-menu.no-wrap') && !e.target.matches('div.dropdown-menu')){
        var el = document.querySelectorAll('.dropdown-content');
        for(var i=0; i<el.length; i++){
            el[i].classList.add('hide');
        }
    }
}