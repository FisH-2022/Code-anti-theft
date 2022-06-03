/*
*Project:Code anti-theft
*Version:1.0.5
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


//打开控制台关闭页面
var h = window.innerHeight,w=window.innerWidth;

window.onresize = function () {

if (h!= window.innerHeight||w!=window.innerWidth){

window.close();

window.location = "about:blank";

}
}

//禁止修改页面元素
if(window.addEventListener){

    window.addEventListener("DOMCharacterDataModified", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMAttributeNameChanged", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMCharacterDataModified", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMElementNameChanged", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMNodeInserted", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMNodeInsertedIntoDocument", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMNodeRemoved", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMNodeRemovedFromDocument", function(){window.location.reload();}, true);
    
    window.addEventListener("DOMSubtreeModified", function(){window.location.reload();}, true);
    
    }

//防调试
setInterval(function() {
    check()
  }, 4000);
  var check = function() {
    function doCheck(a) {
      if (("" + a/a)["length"] !== 1 || a % 20 === 0) {
        (function() {}
        ["constructor"]("debugger")())
      } else {
        (function() {}
        ["constructor"]("debugger")())
      }
      doCheck(++a)
    } 
    try {
      doCheck(0)
    } catch (err) {}
  };
  check();

//次数统计
(function(){ var re=/x/; var i=0; console.log(re); re.toString=function(){ window.close(); return '第'+(++i)+'次打开控制台'; } })();