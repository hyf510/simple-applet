/**
 * Created by Administrator on 2017/3/20.
 */
var tapEdo = document.querySelectorAll('.edo');
for(var i = 0; i < tapEdo.length; i++){
    tapEdo[i].addEventListener('mouseover',function(e){
        var dom = e.currentTarget;
        dom.nextElementSibling.style.display = 'block';
        dom.nextElementSibling.addEventListener('mouseleave',function(e){
            e.currentTarget.style.display = 'none';
        })
    });
}


var tap = document.querySelectorAll('.tap');
for(var i = 0; i < tap.length; i++){
    tap[i].addEventListener('mouseover',function(e){
        var dom = e.currentTarget;
        dom.nextElementSibling.style.display = 'block';
        dom.nextElementSibling.addEventListener('mouseleave',function(e){
            e.currentTarget.style.display = 'none';
        })
    });
}

var interface = document.querySelectorAll('.urlDemo');
for(var i = 0; i < interface.length; i++){
    interface[i].addEventListener('mouseover',function(e){
        var dom = e.currentTarget;
        dom.nextElementSibling.style.display = 'block';
        dom.nextElementSibling.addEventListener('mouseleave',function(e){
            e.currentTarget.style.display = 'none';
        })
    });
}