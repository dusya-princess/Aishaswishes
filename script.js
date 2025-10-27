var currentwish=1;
var list=['travel','learn to cook'];
var imagelist=['santorini.jpg','strawberry cake.jpg'];

function previouswish(){
    currentwish--;
    document.getElementsByClassName("wish")[0].innerHTML=list[currentwish-1];
    document.getElementsByClassName('imgWish')[0].src=`wishes pics/${imagelist[currentwish-1]}`;
}

function nextwish(){
    currentwish++;
    document.getElementsByClassName("wish")[0].innerHTML=list[currentwish-1];
    document.getElementsByClassName('imgWish')[0].src=`wishes pics/${imagelist[currentwish-1]}`;
}