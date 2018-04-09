window.onload = function(){
    selectCity();
    result();
};

function result(){
    var oPutDisplay = document.getElementById('put-display');
    var oSub = document.getElementById('sub'); //计算按钮
    var oRes = document.getElementById('res'); //重置按钮
    var city = document.getElementById('city'); //城市
    var salaryFrame = document.getElementById('yx'); //月薪
    var sqSalary = document.querySelector('.put-footer'); //税前薪资输出区（优化前）
    var shSalary = document.querySelector('.put-rmb'); //税后薪资输出区（优化前）
    var sqSalaryh = document.querySelector('.put-footer2'); //税前薪资输出区（优化后）
    var shSalaryh = document.querySelector('.put-rmb2'); //税后薪资输出区（优化后）
    var yhqScale = document.getElementById('yhq-scale'); //优化前百分比输出
    var yhhScale = document.getElementById('yhh-scale'); //优化后百分比输出
    var shuiScaleTxt = document.querySelector('.shui-scale'); //税扣比
    var shuiNumsTxt = document.querySelector('.shui'); //税额
    var gzScale = document.querySelector('.gongzi-scale'); //工资比
    var gzNum = document.querySelector('.gongzi'); //剩余工资
    var ylScale = document.querySelector('.yanglao-scale'); //养老比
    var ylNum = document.querySelector('.yanglao'); //养老额
    var yiliaoScale = document.querySelector('.yiliao-scale'); //医疗比
    var yiliaoNum = document.querySelector('.yiliao'); //医疗额
    var shiyeScale = document.querySelector('.shiye-scale'); //失业比
    var shiyeNum = document.querySelector('.shiye'); //失业额
    var zhufangScale = document.querySelector('.zhufang-scale'); //住房比
    var zhufangNum = document.querySelector('.zhufang'); //住房额
    var shuiNumTxtScale = null; //税比
    var shuiNumTxtNumber = null; //税额
    var moneyScale = null; //总额比
    var shuiNum = null;
    var shuiScale = null;
    var shuiNumTxt = null;

    //华东地区
    var arr1 = [
        '上海','南京','苏州','无锡','济南','青岛','常州','南通','杭州','宁波',
        '温州','徐州','连云港','淮安','盐城','扬州','镇江','泰州','威海','嘉兴','湖州',
        '绍兴','金华','台州','合肥','昆山','张家港'
    ];

    //华北东北
    var arr2 = [
        '北京','天津','沈阳','大连','石家庄','太原','呼市','包头','长春','郑州','哈尔滨','洛阳'
    ];

    //华南华中
    var arr3 = [
        '深圳','广州','佛山','珠海','惠州','东莞','中山','厦门','长沙','福州',
        '泉州','武汉','汕头','江门','汕尾','潮州','南昌','南宁','海口'
    ];

    //西部地区
    var arr4 = [
        '重庆','成都','西安','贵阳','昆明','拉萨','兰州','西宁','银川','乌鲁木齐'
    ];

    oRes.onclick = function(){
        city.value = '';
        salaryFrame.value = '';
        oPutDisplay.style.display = 'none';
    };

    //执行点击计算
    oSub.onclick = function(){
        oPutDisplay.style.display = 'block';

        if(city.value == '' || salaryFrame.value == ''){
            alert('输入的城市或者月薪不能为空');
            return;
        }else{
            var cityPos = city.value; //城市定位

            if(arr1.indexOf(cityPos) != -1){ //华东地区
                Calculation('8%',3200*0.08,'2%',3200*0.02,'0.3%',3200*0.003,'12%',1810*0.12);
                cake(8,2,0.3,12,shuiNumTxtScale,100-shuiNumTxtScale-8-2-0.3-12);
                bottomTxt('8%',(3200*0.08)+'元','2%',(3200*0.02)+'元','0.3%',(3200*0.003)+'元','12%',(1810*0.12)+'元');
            }else if(arr2.indexOf(cityPos) != -1){ //华北东北地区
                if(cityPos == '北京'){
                    Calculation('8%',4624*0.08,'2%+3元',4624*0.02+3,'0.2%',3083*0.002,'12%',2148*0.12);
                    cake(8,2,0.2,12,shuiNumTxtScale,100-shuiNumTxtScale-8-2-0.2-12);
                    bottomTxt('8%',(4624*0.08)+'元','2%+3元',(4624*0.02+3)+'元','0.2%',(3083*0.002)+'元','12%',(2148*0.12)+'元');
                }else{
                    Calculation('8%',2835*0.08,'2%+3元',4252*0.02+3,'0.2%',2835*0.002,'12%',1530*0.12);
                    cake(8,2,0.2,12,shuiNumTxtScale,100-shuiNumTxtScale-8-2-0.2-12);
                    bottomTxt('8%',(2835*0.08)+'元','2%+3元',(4252*0.02+3)+'元','0.2%',(2835*0.002)+'元','12%',(1530*0.12)+'元');
                }
            }else if(arr3.indexOf(cityPos) != -1){ //华南华中地区
                Calculation('8%',2695*0.08,'2%',2695*0.02,'0.2%',2695*0.002,'12%',1866*0.12);
                cake(8,2,0.2,12,shuiNumTxtScale,100-shuiNumTxtScale-8-2-0.2-12);
                bottomTxt('8%',(2695*0.08)+'元','2%',(2695*0.02)+'元','0.2%',(2695*0.002)+'元','12%',(1866*0.12)+'元');
            }else if(arr4.indexOf(cityPos) != -1){ //西部地区
                Calculation('8%',3081*0.08,'2%+1.6元',3481*0.02+1.6,'0.3%',2695*0.003,'12%',1480*0.12);
                cake(8,2,0.2,12,shuiNumTxtScale,100-shuiNumTxtScale-8-2-0.2-12);
                bottomTxt('8%',(3081*0.08).toFixed(1)+'元','2%+1.6元',(3481*0.02+1.6).toFixed(1)+'元','0.3%',(2695*0.003).toFixed(1)+'元','12%',(1480*0.12).toFixed(1)+'元');
            }
        }


        shuiScaleTxt.innerHTML = shuiNumTxtScale+'%';
        shuiNumsTxt.innerHTML = shuiNumTxtNumber+'元';
        gzScale.innerHTML = (100-shuiNumTxtScale)+'%';
        gzNum.innerHTML = salaryFrame.value-shuiNumTxtNumber+'元';
    };

    function bottomTxt(){
        for(var i=0;i<arguments.length;i++){
            ylScale.innerHTML = arguments[0];
            ylNum.innerHTML = arguments[1];
            yiliaoScale.innerHTML = arguments[2];
            yiliaoNum.innerHTML = arguments[3];
            shiyeScale.innerHTML = arguments[4];
            shiyeNum.innerHTML = arguments[5];
            zhufangScale.innerHTML = arguments[6];
            zhufangNum.innerHTML = arguments[7];
        }
    }

    function Calculation(){
        //个人所得税计算
        var salaryNum = salaryFrame.value; //税前工资

        for(var i=0;i<arguments.length;i++){
            var yanglaoScale = arguments[0];
            var yanglaoNum = arguments[1]
            var yiliaoScale = arguments[2];
            var yiliaoNum = arguments[3];
            var shiyeScale = arguments[4];
            var shiyeNum = arguments[5];
            var gongjijinScale = arguments[6];
            var gongjijinNum = arguments[7];
        }

        if(salaryNum-3500<1500){
            shuiScale = '3%';
            shuiNum = (salaryNum-3500)*0.03;
        }else if(salaryNum-3500>1500&&salaryNum-3500<4500){
            shuiScale = '10%';
            shuiNum = (salaryNum-3500)*0.1;
        }else if(salaryNum-3500>4500&&salaryNum-3500<9000){
            shuiScale = '20%';
            shuiNum = (salaryNum-3500)*0.2;
        }else if(salaryNum-3500>9000&&salaryNum-3500<35000){
            shuiScale = '25%';
            shuiNum = (salaryNum-3500)*0.25;
        }else if(salaryNum-3500>35000&&salaryNum-3500<55000){
            shuiScale = '30%';
            shuiNum = (salaryNum-3500)*0.3;
        }else if(salaryNum-3500>55000&&salaryNum-3500<80000){
            shuiScale = '35%';
            shuiNum = (salaryNum-3500)*0.35;
        }else if(salaryNum-3500>80000){
            shuiScale = '45%';
            shuiNum = (salaryNum-3500)*0.45;
        }

        shuiNumTxtScale = parseInt(shuiScale);
        shuiNumTxtNumber = shuiNum;

        //税后薪资计算
        var sq = salaryFrame.value;
        var sh = (sq-(shuiNum+yanglaoNum+yiliaoNum+shiyeNum+gongjijinNum)).toFixed(2);

        //税前税后薪资比例
        var salaryScale = (sh/sq*100).toFixed(1)+'%';
        var salaryNum = Math.round(sh/sq*100);

        sqSalary.innerHTML = '税前工资：'+sq+'元';
        shSalary.innerHTML = sh+'元';
        yhqScale.innerHTML = salaryScale;
        moneyScale = parseInt(salaryScale);
        put('myCanvas1',salaryNum);

        //优化薪资
        var yh = (sq-sq/1.06*0.09).toFixed(2);
        var yhPutScale = (yh/sq*100).toFixed(1)+'%';
        var yhScale = Math.round(yh/sq*100);

        sqSalaryh.innerHTML = '税前工资：'+sq+'元';
        shSalaryh.innerHTML = yh+'元';
        yhhScale.innerHTML = yhPutScale;
        put('myCanvas2',yhScale);
    }
}

//环状图
function put(obj,num){
    var canvas = document.getElementById(obj);
    var context = canvas.getContext('2d');
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    var rad = Math.PI*2/100;
    var speed = 0;
    var num = num;
    var timer = null;

    function blueCircle(n){
        context.save();
        context.strokeStyle = '#35cdbf';
        context.lineWidth = 20;
        context.beginPath();
        context.arc(centerX,centerY,100,-Math.PI/2,-Math.PI/2+n*rad,false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    function whiteCircle(){
        context.save();
        context.beginPath();
        context.lineWidth = 20;
        context.strokeStyle = "#6395ec";
        context.arc(centerX, centerY, 100 , 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
        context.restore();
    }

    function text(n){
        context.save();
        context.strokeStyle = '#000';
        context.font = '40px Arial';

        context.strokeText(n.toFixed(0)+'%',centerX-30,centerY+10);
        context.stroke();
        context.restore();
    }

    timer = setInterval(function(){
        context.clearRect(0,0,canvas.width,canvas.height);
        whiteCircle();
        //text(speed);
        blueCircle(speed);

        if(speed >= num){
            speed = num-1;
        }

        speed += 1;
    },1000/60);
}

//饼图
function cake(cakeNum1,cakeNum2,cakeNum3,cakeNum4,cakeNum5,cakeNum6){
    var data = [
        {name : '养老保险金',value : cakeNum1,color:'#33cdbe'},
        {name : '医疗保险金',value : cakeNum2,color:'#55d16b'},
        {name : '失业保险金',value : cakeNum3,color:'#97b3bc'},
        {name : '住房公积金',value : cakeNum4,color:'#ff7f50'},
        {name : '个人所得税',value : cakeNum5,color:'#6395ec'},
        {name : '实得工资',value : cakeNum6,color:'#127c9d'},
    ];

    new iChart.Pie2D({
        render : 'cake',
        data: data,
        title : '少的钱去哪了？',
        legend : {
            enable : false
        },
        showpercent:true,
        decimalsnum:2,
        width : 800,
        height : 400,
        radius:160
    }).draw();
}

//城市选择
function selectCity(){
    var oCityTxt = document.getElementById('city');
    var oList = document.getElementById('city-select');
    var oClose = document.getElementById('close');
    var aTd = document.querySelectorAll('td');

    for(var i=0;i<aTd.length;i++){
        aTd[i].onclick = function(){
            oCityTxt.value = this.innerHTML;
            oList.style.display = 'none';
        };
    }

    oCityTxt.onfocus = function(){
        oList.style.display = 'block';
    };

    oClose.onclick = function(){
        oList.style.display = 'none';
    };
}

