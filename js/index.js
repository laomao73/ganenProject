window.onload = function(){
    terminal();

    window.onresize = function(){
        terminal();
    };

    var aChallengeLi = document.querySelectorAll('.challenge-item-box ul li');
    var oPrev = document.querySelector('.prev');
    var oNext = document.querySelector('.next');
    var aPos = [
        {left:0,top:5,zIndex:5,scales:0.9},
        {left:250,top:0,zIndex:10,scales:1},
        {left:500,top:5,zIndex:5,scales:0.9}
    ];

    var bReady = true;

    setLiStyle();

    oNext.onclick = function(){
        if(bReady){
            for(var i=0;i<aChallengeLi.length;i++){
                aChallengeLi[i].style.transition = '0.6s all ease';
            }

            aPos.push(aPos.shift());
            setLiStyle();
        }

        bReady = false;
    };

    oPrev.onclick = function(){
        if(bReady){
            for(var i=0;i<aChallengeLi.length;i++){
                aChallengeLi[i].style.transition = '0.6s all ease';
            }

            aPos.unshift(aPos.pop());
            setLiStyle();
        }

        bReady = false;
    };

    aChallengeLi[0].addEventListener('transitionend',function(){
        bReady = true;
    },false);

    bannerTab();    //Banner滚动

    function setLiStyle(){
       for(var i=0;i<aChallengeLi.length;i++){
           aChallengeLi[i].style.position = 'absolute';
           aChallengeLi[i].style.left = aPos[i].left+'px';
           aChallengeLi[i].style.top = aPos[i].top+'px';
           aChallengeLi[i].style.zIndex = aPos[i].zIndex;
           aChallengeLi[i].style.transform = 'scale('+aPos[i].scales+')';
        }
    }

    function getStyle(obj,name){
       return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
    }
};

//焦点图
function bannerTab(){
    var oBannerFrame = document.getElementById('banner-frame');
    var aLi = oBannerFrame.querySelectorAll('li');
    var oBtnBox = document.getElementById('btn-box');
    var aBtn = oBtnBox.children;
    var now = 0;
    var timer = null;

    for(var i=0;i<aBtn.length;i++){
        (function(index){
            aBtn[index].onclick = function(){
                now = index;
                tab(now);
            };
        })(i);
    }

    function next(){
        now++;
        if(now > aBtn.length-1)now = 0;
        tab(now);
    }

    timer = setInterval(next,4000);

    oBannerFrame.onmouseenter = function(){
        clearInterval(timer);
    };

    oBannerFrame.onmouseleave = function(){
        timer = setInterval(next,4000);
    }

    function tab(now){
        for(var i=0;i<aBtn.length;i++){
            aBtn[i].classList.remove('active');
            aLi[i].classList.remove('active');
        }

        aBtn[now].classList.add('active');
        aLi[now].classList.add('active');
    }
}