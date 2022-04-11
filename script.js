function projeto(){
  document.getElementById('encolher').style.display="none"
        var plocal=document.getElementById('projeto')
        plocal.innerHTML=(`<div class="nome"><img src="imgs/project.png" width="40px">Projetos<br><h2 onclick="projeto()">Clique no ícone para minimizar <img src="imgs/encolher.png" width="20px" onclick="history.go(0)"></h2><br><div id="fonte"><p> Meu Lucro é uma aplicação desenvolvida em Java Script ela foi desenvolvida para calcular o juros de um produto em diferentes faixas de preços começando em 40% e decaindo em outras faixas de preço,outra funcionalidade legal, é poder salvar ou imprimir seus calculos.</p><div id="img" onclick="img()"><img src="imgs/print.png" width="250px" title="Clique na imagem para aumentar"></div><div id="local"></div><br><h4><a href="https://jldomingues.github.io/meulucro/">Acessar Aplicação</a></h4><p> CatFit é uma aplicação desenvolvida em Javascript com intuito de calcular o imc do usuário de maneira cômica e divertida. <br><div id="img2" onclick="img2()"> <img src="imgs/print2.png" width="250px"></div><div id="local2"></div><br>
    <h4><a href="https://jldomingues.github.io/catfit/"> Acessar Aplicação</h4></a><p> Copa do Mundo 2022 é uma aplicacão em Javascript com o intuito de organizar os grupos da copa do mundo<br><div id="img3" onclick="img3()"> <img src="imgs/print3.png" width="250px"></div><div id="local3"></div><br><h4><a href="https://jldomingues.github.io/copadomundo2022/"> Acessar Aplicação</h4></a></div>`)
    
    
      }
function video(){
  
        var plocal=document.getElementById('video')
       window.alert('Conteúdo em desenvolvimento')

}



function img(){
        document.getElementById('img').style.display="none"
        var plocal=document.getElementById('local')
        plocal.innerHTML=(`<img src="imgs/print.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }
function img2(){
        document.getElementById('img2').style.display="none"
        var plocal2=document.getElementById('local2')
        plocal2.innerHTML=(`<img src="imgs/print2.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }
function img3(){
        document.getElementById('img3').style.display="none"
        var plocal3=document.getElementById('local3')
        plocal3.innerHTML=(`<img src="imgs/print3.png"><br>
      <div onclick="history.go(0)">  Minimizar</div>`)
      }
