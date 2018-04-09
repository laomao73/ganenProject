window.onload = function(){
    onReasize();

    var aBtn = document.querySelectorAll('.service-btn');
    var aService = document.querySelectorAll('.service');
    var now = 0;

    for(var i=0;i<aBtn.length;i++){
        (function(index){
            aBtn[index].onclick = function(){
                for(var i=0;i<aBtn.length;i++){
                    aBtn[i].classList.remove('active');
                    aService[i].classList.remove('active');
                }

                aBtn[index].classList.add('active');
                aService[index].classList.add('active');
            };
        })(i);
    }
};