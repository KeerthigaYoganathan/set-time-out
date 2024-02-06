var val;
function start(){
   val = setInterval(alertFun, 1000);    
}
function alertFun(){
    console.log("page loaded");
}
function stop(){
    clearInterval(val);
    console.log("value");
}
