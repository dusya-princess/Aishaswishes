var currentwish=1;
var list=['travel','learn to cook','JBL headphones'];
var imagelist=['santorini.jpg','strawberry cake.jpg','headphones.png'];
// 550px - 
function previouswish(){
    currentwish--;
    if (currentwish==0){
        currentwish=list.length;
    }
changewish();
}

function nextwish(){
    currentwish++;
    if (currentwish>list.length){
        currentwish=1;
    }
  changewish();
}


function changewish(){
     document.getElementsByClassName("wish")[0].innerHTML=list[currentwish-1];
    document.getElementsByClassName('imgWish')[0].src=`wishes pics/${imagelist[currentwish-1]}`;
    if(currentwish==3){
   document.getElementsByClassName('imgWish')[0].style.margintop='10vh' ;    
    }else{
   document.getElementsByClassName('imgWish')[0].style.margintop='0vh' ;  
    }
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