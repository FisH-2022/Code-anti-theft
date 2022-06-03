/*
*Project:Code anti-theft
*Version:1.0.0
*Auther:FISH
*Time:2022-6-3
*/
//禁用操作

window.onload = function(){
    document.onkeydown = function (){
        var e = window.event || arguments[0];
        //F12
        if(e.keyCode == 123){
            return false;
        //Ctrl+Shift+I
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
            return false;
        //Ctrl+Shift+C
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)){
            return false;
        //Ctrl+Shiift+J
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 74)){
            return false;
        //Shift+F10
        }else if((e.shiftKey) && (e.keyCode == 121)){
            return false;
        //Ctrl+U
        }else if((e.ctrlKey) && (e.keyCode == 85)){
            return false;
        //Ctrl+S
        }else if((e.ctrlKey) && (e.keyCode == 83)){
        return false;
    }
};
    document.oncontextmenu = function (){
        return false;
    }
}

//禁止复制
document.onselectstart=new Function('event.returnValue=false;');

//禁止选择文字
document.body.onselectstart = function() {
    self.event.returnValue=false
  };

//操作提示

((function() {
    var callbacks = [],
    timeLimit = 50,
    open = false;
    setInterval(loop, 1);
    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancleListenr: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function(fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.stop();
            alert('不要扒我了');
            window.location.reload();
            window.location.href='./firewall.php';

            
        } else {
            open = false;
        }
    }
})()).addListener(function() {
    window.location.reload();
});

//检测控制台是否开启
var h = window.innerHeight,w=window.innerWidth;
window.onresize = function () {
if (h!= window.innerHeight||w!=window.innerWidth){
    window.close();
    window.location = "about:blank";}
}
