var tela = 1;
var y = 180;
var i;
var fundo, quadro, lousa, quadro2, mold;
var correto, errado;
controle = false;
var thais;
var socorro;
var jogo;
var yAlt = 240;
var xAlt_A = 70;
var xAlt_B = 145;
var xAlt_C = 217;
var xAlt_D = 289;
var som;
var contTime = false;
var time, clock;
var vida;
var garrafa, lixeira, sacola;
var ysacola = -50, ygarrafa = -180, xsacola = 0, xgarrafa = 200;
var lixoX = 150, lixoY = 300;
var colidesacola; 
var colidegarrafa;
var pontos=0;
var telaAnterior=1;
var som2;

function setup() {
createCanvas(400, 400);
  time= 0; clock=0;
}

function preload(){
  //imagens
  fundo= loadImage('floresta1.jpg');
  thais= loadImage('eu.jpeg');
  socorro= loadImage('socorro.jfif');
  jogo = loadImage('jogo.jpg');
  quadro = loadImage('quadro.png');
  lousa = loadImage('lousa.jpg');
  quadro2 = loadImage('quadro2.jpg');
  mold = loadImage('QN.jpg');
  correto = loadImage('correto.png');
  errado = loadImage('errado.png');
  garrafa = loadImage("garrafa.png");
  lixeira = loadImage("lixeira.png");
  sacola = loadImage("sacola.png");
  
  
  som = loadSound('floresta.mp3');
  som2 = loadSound('floresta.mp3');
}
function collide(){
colidesacola = int(dist(lixoX,lixoY,xsacola, ysacola));
colidegarrafa = int(dist(lixoX,lixoY,xgarrafa, ygarrafa));
  
  
    if(colidesacola <= 30){
          ysacola = -100
          xsacola = random(0, 350);
          pontos++
        }
    if(colidegarrafa <= 30){
          ygarrafa = -100;
          xgarrafa = random(0, 350);
          pontos++;
        }
  
}

function draw(){
    collide();
          // Mostra a tela de Menu \\
    if(tela ==1){
         if(playsound()){
        som.pause();
        som2.pause();
      } 
        background(0);
        image(fundo, 0, 0);
        image(quadro, 50, 5);    
        textSize(25);
        textAlign(CENTER)

        strokeWeight(3);    
        fill('#2D892F');    
        rect(140, y, 120, 35);

        fill(240);
        stroke('#88522E');
        strokeWeight(4);
        textStyle(ITALIC);
        text('Educação Ambiental', 200,80)    
        fill(240);
        stroke('#88522E');
        strokeWeight(5);
        textStyle(NORMAL);
        text('Jogar', 200,203);
        text('Instruções', 200, 253);
        text("Créditos", 200, 303);
    
        if (keyIsPressed == false) {
            controle = false
        }
        if (controle == false) {
            if (keyIsDown(UP_ARROW) && (y <= 280 && y > 180)){
                y -= 50
                controle = true;
            }
            if (keyIsDown(ENTER) && y == 180) {
                tela = 2
                controle = true
                contTime = true;
            } 
            else if (keyIsDown(ENTER) && y == 230) {
                tela = 3
                controle = true
            } 
            else if(keyIsDown(ENTER) && y == 280) {
                tela = 4
                controle = true
            }
            if (keyIsDown(DOWN_ARROW) && (y <= 280 - 30 && y >= 180)) {
                y += 50
                controle = true
            }
        }
    }
  
          // Mostra a tela de Game \\  
    else if (tela ==2){
     if(playsound()){
        som.play();
        som.setVolume(0.2);
      } 
        vida=3;
        background(0);
        image(jogo, 0,0);
      //////////////////////////////////
      if(contTime == true){
time++
clock = 30 - int(time/100);
fill("white");
stroke("black");
text("Tempo restante: " + clock,200,20);   
  if(clock == 0){
    if(vida > 0){
        vida--;
        time = 0;
        tela=1;
        contTime=false;
    } 
  }     
}
      //////////////////////////////////
        fill(105, 200, 100);
        //text("vidas: "+vida, 30,15);
        stroke('#88522E');
        strokeWeight(3);
        fill(105, 200, 100);
        rect(xAlt_A, yAlt, 40, 30);
  
        if(mouseX > xAlt_A && mouseX < xAlt_A +40 && mouseY > yAlt && mouseY < yAlt + 30){
            fill('#3EBA91');
            rect(xAlt_A, yAlt, 40, 30); 
            if(mouseIsPressed){
                tela = 5;
            } 
        } 
        
        fill('#222222');
        stroke('#88522E');
        strokeWeight(2);
        textSize(15);
        text("A",90 ,260 );
               
        stroke('#88522E');
        strokeWeight(3);
        fill(105, 200, 100);
        rect(xAlt_B, yAlt, 40, 30);
        
        if(mouseX >= xAlt_B && mouseX <= xAlt_B + 40 && mouseY >= yAlt && mouseY < yAlt + 30){
            fill('#3EBA91');
            rect(xAlt_B, yAlt, 40, 30);
            
            if(mouseIsPressed){
                image(errado, 100, 130);
            }        
        } 
      
        fill('#222222');
        stroke('#88522E');
        strokeWeight(2);
        textSize(15);    
        text("B", 165,260 ); 

        stroke('#88522E');
        strokeWeight(3);
        fill(105, 200, 100);
        rect(xAlt_C, yAlt, 40, 30);
             
        if(mouseX > xAlt_C && mouseX < xAlt_C + 40 && mouseY > yAlt && mouseY < yAlt + 30){
            fill('#3EBA91');
            rect(xAlt_C, yAlt, 40, 30);
            
            if(mouseIsPressed){
                image(errado, 100, 130);
            } 
        
        } 
        
        fill('#222222');
        stroke('#88522E');
        strokeWeight(2);
        textSize(15);  
        text("C", 237,260 );
      
        stroke('#88522E');
        strokeWeight(3);
        fill(105, 200, 100);
        rect(xAlt_D, yAlt, 40, 30);
        
        if(mouseX > xAlt_D && mouseX < xAlt_D + 40 && mouseY > yAlt && mouseY < yAlt + 30){
            fill('#3EBA91');
            rect(xAlt_D, yAlt, 40, 30);
            if(mouseIsPressed){
                image(errado, 100, 130);
            } 
        } 
        
        fill('#222222');
        stroke('#88522E');
        strokeWeight(2);
        textSize(15);
        text("D", 309,260 );
        
        fill('#222222');
        text("Em qual lixeira podemos colocar \n esse objeto para ser reciclado?", 200, 40); 

        if (keyIsDown(ESCAPE)){tela=1}
    }
  
  
          // Mostra a tela de Instruções \\  
    else if (tela ==3){
        background(0);
        image(lousa, 0, 0);  
        textAlign(CENTER);
        noStroke(); 
        fill('#222222');
        textSize(20);  
        text("Esse jogo foi desenvolvido: \n Para crianças do 4º ano do ensino \n fundamental, com o intuito \n de enriquecer o conhecimento \n sobre a reciclagem.", 180, 50);
        stroke('#21581F');
        strokeWeight(3);  
        fill('#41C143');
        text("Como funciona?",180,190);
        noStroke();
        fill('#222222')
        text("O aluno terá que selecionar a \n opção correta de cada pergunta. \n Se acertar,aparecerá a opção certa, \n caso erre, aparecerá que \n esta errada.",180,225);
        noStroke();  
        textSize(15);  
        text("Aperte ESC para voltar",180,365);
        if (keyIsDown(ESCAPE)){tela=1}
    }
  
  
          // Mostra a tela de Créditos \\  
    else if (tela == 4){
        background(0);
        image(quadro2, 0, 0);
        image(mold, 135, 88);
        image(mold, 135, 203);
        fill('#D7D781');
        noStroke();       
        textSize(15);  
        text("aperte ESC para voltar", 200, 365);
        noStroke();
        fill('#D7D781');
        textSize(20);  
        text("Programadora \n Francisca Thaís ", 242, 117);
        text("Educadora \n Socorro Rêgo ", 242, 237);
        image(thais, 30, 70, 90,110);
        image(socorro, 30, 185, 90,110);
        if (keyIsDown(ESCAPE)){tela=1}
    }
  
  
  else if (tela ==5){
        if(playsound()){
        som.pause();
        som2.play();
        som2.setVolume(0.2);
      }
        vida=3;
        background(0);
        image(sacola, xsacola,ysacola);
        image(garrafa, xgarrafa,ygarrafa);
        
      //////////////////////////////////
      if(contTime == true){
time++
clock = 30 - int(time/100);
fill("white");
stroke("black");
text("Tempo restante: " + clock,200,20);   
  if(clock == 0){
    if(vida > 0){
        vida--;
        time = 0;
        tela=1;
        contTime=false;
    } 
  }     
}
    ysacola++;
    ygarrafa++;
    
    text("Pontos: "+pontos, 30, 15);
    
    if(pontos >= 10){
      tela = 1
      pontos = 0;
    }
    
    if(ysacola > 400){
          ysacola = -100;
          xsacola = random(0, 350);
          pontos--;
            if(pontos <= 0){
              tela = 1
              pontos = 0;
              time = 0;
              contTime=false
            }
        }
    if(ygarrafa > 400){
          ygarrafa = -200;
          xsacola = random(0, 350);
          pontos--;
            if(pontos <= 0){
              tela = 1
              pontos = 0;
              time = 0;
              contTime=false
            }
        }
    
    if (keyIsDown(RIGHT_ARROW)) {
                lixoX += 2
                if(lixoX+70 >= width){
                  lixoX -= 2;
                }
            }
    else if (keyIsDown(LEFT_ARROW)) {
                lixoX -= 2
                if(lixoX <= 0){
                  lixoX += 2;
                }
            }
     image(lixeira, lixoX,lixoY, 75, 100);

        if (keyIsDown(ESCAPE)){tela=1}
    }
  //**************************************************************
  //**************************************************************
  
          // Mostra a tela de Resposta correta \\
    else if (tela == 'Correta'){
        background(0);
        image(jogo, 0,0);
        fill(105, 200, 100);
        image(correto, 150, 130)
        
        fill('#222222');
        text("Em qual lixeira podemos colocar \n esse objeto para ser reciclado?", 200, 40); 
      if (keyIsDown(ESCAPE)){tela=2}
    }
  
}
function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}

