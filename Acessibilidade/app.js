//quando a página for carregada, o site carrega a function principal.
document.addEventListener("DOMContentLoaded", function() {
	
	//variável de controle para o modo auto-contraste
    let ACativado = false;
    document.getElementById("altoContraste").addEventListener("click", function(){

		//quando clicado no botão ela muda de false para true, e vice-versa.
        ACativado = !ACativado;

		//se for true, o código para modo ativado é rodado. Se for false, ele desativa o modo.
        if(ACativado){
            this.innerText = "Desativar\n Alto-Contraste";
            ACativo();
        }else{
            this.innerText = "Ativar\n Alto-Contraste";
            ACoff();
        };

		//Essas são as duas functions que fazem o modo.
        function ACativo(){
			//o código pega o body, as divs e os botões e muda a cor de fundo para preto. E a fonte muda para branco, dando o contraste.
			//o laço for serve para percorrer a lista de elementos que é feita pelos getElement e alterar os elementos um por um
            document.body.style.backgroundColor = "black";
            document.querySelector("h1").style.color = "white";

            let texto = document.getElementsByClassName("texto");

            for (let i = 0; i < texto.length; i++){
                texto[i].style.color = "white";
            };

            let content = document.getElementsByClassName("content");

            for (let i = 0; i < content.length; i++){
                content[i].style.backgroundColor = "black";
                content[i].style.borderColor = "gray";
            };

            let buttons = document.getElementsByClassName("button");

            for (let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundColor = "black";
                buttons[i].style.borderColor = "grey";
                buttons[i].style.color = "white";
            };
        };

        function ACoff(){
			//O ACoff é igual ao outro, com a diferença sendo as cores, apenas.
            document.body.style.backgroundColor = "white";
            document.querySelector("h1").style.color = "black";
            
            let texto = document.getElementsByClassName("texto");

            for (let i = 0; i < texto.length; i++){
                texto[i].style.color = "black";
            };

            let content = document.getElementsByClassName("content");

            for (let i = 0; i < content.length; i++){
                content[i].style.backgroundColor = "white";
                content[i].style.borderColor = "black";
            };

            let buttons = document.getElementsByClassName("button");

            for (let i = 0; i < buttons.length; i++){
                buttons[i].style.backgroundColor = "white";
                buttons[i].style.borderColor = "black";
                buttons[i].style.color = "black";
            };
        };

    });
	
	//Duas variáveis, uma para armazenar os tamanhos de texto, e outra para acessar o índice de cada.
    let tamanhos = ["16px", "20px", "24px", "28px"];
    let indice = 1;
    document.getElementById("tamanhoFonte").addEventListener("click", function(){

		//Os elementos com a classe texto são armazenados em "textos", depois para cada um, o tamanho atual é alterado para o novo valor, dentro da var tamanhos. O índice então aumenta em 1, e vai ser retornado ao valor original após o 4º valor.
        let textos = document.querySelectorAll(".texto"); 
            
            textos.forEach(texto => {
                texto.style.fontSize = tamanhos[indice]; 
            });

            console.log(indice);

            indice = (indice + 1) % tamanhos.length;

    });

    

});