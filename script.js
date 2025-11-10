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

function createsnowflake(){
    var snowflake=document.createElement('div');
    snowflake.innerHTML='❄';

    snowflake.classList.add('flake');
    snowflake.style.left=Math.random()*100+'vw';
    var size=Math.random();
    snowflake.style.fontSize=size*20+7+'px';
    snowflake.style.animationDuration=14-(size*10)+'s';
    document.body.appendChild(snowflake);
    setTimeout(()=>
        {
            snowflake.remove();
        }
        , 8000);

}

setInterval(createsnowflake,200);