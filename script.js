function img(){
        document.getElementById('img').style.display="none"
        var plocal=document.getElementById('local')
        plocal.innerHTML=(`<img src="imgs/print.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }
function img2(){
        document.getElementById('img2').style.display="none"
        var plocal=document.getElementById('local2')
        plocal.innerHTML=(`<img src="imgs/print2.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }
