console.log('loaded Notebook(libreta.js)');
var notebookC;
var message_notebook;
var closeButton2;
var notebookActive=false;
var iClue=0;
var clues=[];
clueYanterior=0;
function loadNotebook(){
 console.log("Opening notebook..."); 
 //if(stage){

    //if(notebookC){
    notebookC=new createjs.Container();
    /*notebook.bmp=new createjs.Bitmap(loader.getResult('bgNotebook'));*/
    notebookC.x = w/24;//80;//stage.canvas.width/2;
    notebookC.y=h+23*h/72;//1900;//stage.canvas.height*2+stage.canvas.height-50;
    content.addChild(notebookC);
    //notebookC.addChild(notebook);
    closeButton2=new createjs.Bitmap(loader.getResult('closeBt'));
    closeButton2.x=w/24;//80;
    closeButton2.y=0;
    notebookC.addChild(closeButton2);
    closeButton2.addEventListener("click",closeNotebook);
    

    message_notebook = new createjs.Text("Pistas/Info");
    message_notebook.font ="16px BrotherDeluxe";
    message_notebook.color = "#99402D";
	message_notebook.x = window.innerWidth/4; 
    message_notebook.y = window.innerHeight/8;
    message_notebook.maxWidth=window.innerWidth;
    notebookC.addChild(message_notebook);
    for(var q in clues){
        notebookC.addChild(clues[q]);
    }
   
   // }
 //}
}

function closeNotebook(){
    notebookC.removeChild(closeButton2);
   // notebookC.removeChild(notebook)
    notebookC.removeChild(message_notebook);
    content.removeChild(notebookC);
    notebookActive=false;
    notebook.visible=false;
    bkgNotebook.visible = true;
}

function addClue(textClue,idWitness){
//n será el indice que guarda el numero de pistas ya apuntadas
//Se usa para posicionar calculando .y=n*40; por tamaño 36px
    
    var colorPista="black";
    if(idWitness==0)colorPista = "#99402D";
    else if(idWitness>contacts.length) {
        colorPista ="green";
        textClue='Patrulla'+idWitness+': '+textClue; //.slice(0,60)+'...'
    }
    clues[iClue] = new createjs.Text(textClue);
    clues[iClue].font ="16px BrotherDeluxe";
    clues[iClue].textAlign="left";
    clues[iClue].color = colorPista;
    clues[iClue].x = w/10; 
    clues[iClue].y = 2*h/10+clueYanterior; //Guardar ultima posicion en clueYanterior;
    if(textClue.length>window.innerWidth/32){
        clueYanterior=((16*textClue.length/window.innerWidth)*h/10)+iClue*h/10;
    }
    else clueYanterior=2*iClue*h/10;
    clues[iClue].lineWidth=window.innerWidth/2;
    iClue++;
}