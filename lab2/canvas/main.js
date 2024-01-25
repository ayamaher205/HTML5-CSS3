var c=document.getElementsByTagName('canvas')[0];
var btn = document.getElementById("draw");
var inpt = document.getElementsByTagName("input")[0];
var ctx=c.getContext('2d');
        function draw(){
                ctx.clearRect(0,0,c.width,c.height)
                ctx.strokeStyle=inpt.value;
                ctx.lineWidth='4';
                for(var i = 0;i<100;i++){
                    ctx.beginPath();
                    var w=Math.floor(Math.random()*c.width);
                    var h=Math.floor(Math.random()*c.height);
                    ctx.arc(w,h,50,0,Math.PI*2);
                    ctx.stroke();
                }
            }
         btn.addEventListener("click",draw);
        //setInterval(draw,500);