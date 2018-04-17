function onReasize(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth/16+'px';

    window.onresize = function(){
        document.documentElement.style.fontSize = document.documentElement.clientWidth/16+'px';
        terminalMoblie();
    };

    //导航菜单高度
    var oMenu = document.querySelector('.menu');
    oMenu.style.height = document.documentElement.clientHeight+'px';

    //导航点击
    var oMenuBox = document.querySelector('.menu-box');
    oMenuBox.onclick = function(event){
        oMenu.style.transition = '0.5s all ease';
        oMenu.style.left = '8rem';

        event.cancelBubble = true;
        event.stopPropagation();
    };

    var oBox = document.getElementById('box');

    oBox.onclick = function(){
        oMenu.style.transition = '0.5s all ease';
        oMenu.style.left = '16rem';
    };

    // document.documentElement.onclick = function(){
    //     oMenu.style.transition = '0.5s all ease';
    //     oMenu.style.left = '16rem';
    // };
}

//判断设备
function terminal(){
    if(document.documentElement.clientWidth<992){
        window.location.href = 'http://www.52ganen.com/ganenmoblie/';
    }
}

function terminalMoblie(){
    if(document.documentElement.clientWidth>992){
        window.location.href = 'http://www.52ganen.com';
    }
}

//iframe调式
// function iFrame(obj){
//     var oFrame = document.querySelector(obj);
//     var oWinFrame = oFrame.contentWindow;
//
//     console.log(oWinFrame.document.body);
//
//     if(oWinFrame.document.body){
//         console.log(oWinFrame.document.body.scrollHeight);
//         oFrame.style.height = oWinFrame.document.body.clientHeight+'px';
//     }
// }

//遮罩层属性设置
function maskSet(obj){
    var maskSet = document.getElementById(obj);
    maskSet.style.width = document.documentElement.clientWidth+'px';
    maskSet.style.height = document.documentElement.clientHeight+'px';
}

