var items = document.querySelectorAll(".info-icon");
//console.log(items[items.length-1]);
items[items.length-1].style.margin="0";
//console.log(items)
for (var i=0; i<items.length; i++){ 
    var el = document.querySelector("div[data-item="+items[i].dataset.item+"]");
    var b = items[i].getBoundingClientRect().bottom;
    el.style.left=((items[i].getBoundingClientRect().right-items[i].getBoundingClientRect().left)/2+items[i].getBoundingClientRect().left-(el.offsetWidth/2)).toString()+"px";
    el.style.top=(b+17).toString()+"px";
    
    items[i].addEventListener('mouseover', function(){
        var data = this.dataset.item;
        var e = document.querySelector("div[data-item="+ data +"]");
        e.classList.remove("hide");
    });

    items[i].addEventListener('mouseleave', function(){
        var data = this.dataset.item;
        var e = document.querySelector("div[data-item="+ data +"]");
        e.classList.add("hide");
    });
}

window.onresize = function (){
    for (var i=0; i<items.length; i++){
        var el = document.querySelector("div[data-item="+items[i].dataset.item+"]");
        var b = items[i].getBoundingClientRect().bottom;
        el.style.left=((items[i].getBoundingClientRect().right-items[i].getBoundingClientRect().left)/2+items[i].getBoundingClientRect().left-(el.offsetWidth/2)).toString()+"px";
        el.style.top=(b+17).toString()+"px";
    }
}

window.onscroll = function () {
    for (var i=0; i<items.length; i++){
        var el = document.querySelector("div[data-item="+items[i].dataset.item+"]");
        var b = items[i].getBoundingClientRect().bottom;
        el.style.left=((items[i].getBoundingClientRect().right-items[i].getBoundingClientRect().left)/2+items[i].getBoundingClientRect().left-(el.offsetWidth/2)).toString()+"px";
        el.style.top=(b+17).toString()+"px";
    }
}