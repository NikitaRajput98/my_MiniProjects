const clock=document.getElementById('clock')



setInterval(function(){
    let date=new Date()
    //console.groupCollapsed(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()
},1000)