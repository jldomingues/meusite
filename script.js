function img(){
        document.getElementById('img').style.display="none"
        var plocal=document.getElementById('local')
        plocal.innerHTML=(`<img src="imgs/print.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }