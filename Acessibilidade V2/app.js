//quando a página for carregada, o site carrega a function principal.
document.addEventListener("DOMContentLoaded", function() {
	
    document.getElementById("CorPadrao").addEventListener("click", function(){

        CorPadrao();

        function CorPadrao(){
            //O CorPadrao é igual aos outros, com a diferença sendo as cores, apenas.
            document.body.style.backgroundColor = "white";
            document.querySelector("h1").style.color = "black";
            
            let opcoes = document.getElementById("ModosVisuais")
            opcoes.style.backgroundColor = "white";
            opcoes.style.borderColor = "black";
            opcoes.style.color = "black";
            
            let texto = document.getElementsByTagName("p");
    
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

    document.getElementById("AutoContraste").addEventListener("click", function(){

        ACativo();

        function ACativo(){
			//o código pega o body, as divs e os botões e muda a cor de fundo para preto. E a fonte muda para branco, dando o contraste.
			//o laço for serve para percorrer a lista de elementos que é feita pelos getElement e alterar os elementos um por um
            document.body.style.backgroundColor = "black";
            document.querySelector("h1").style.color = "white";

            let opcoes = document.getElementById("ModosVisuais")
            opcoes.style.backgroundColor = "black";
            opcoes.style.borderColor = "grey";
            opcoes.style.color = "white";

            let texto = document.getElementsByTagName("p");

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

    });

    document.getElementById("Tritanopia").addEventListener("click", function(){

        Tritanopia();

        function Tritanopia(){
            document.body.style.backgroundColor = "#f5f5f5";
            document.querySelector("h1").style.color = "#003366";

            let opcoes = document.getElementById("ModosVisuais");
            opcoes.style.backgroundColor = "#f5f5f5";
            opcoes.style.borderColor = "#003366";
            opcoes.style.color = "#003366";

            let texto = document.getElementsByTagName("p");
            for (let i = 0; i < texto.length; i++) {
                texto[i].style.color = "#003366";
            }

            let content = document.getElementsByClassName("content");
            for (let i = 0; i < content.length; i++) {
                content[i].style.backgroundColor = "#f5f5f5";
                content[i].style.borderColor = "#003366";
            }

            let buttons = document.getElementsByClassName("button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#f5f5f5";
                buttons[i].style.borderColor = "#003366";
                buttons[i].style.color = "#003366";
            }
        };

    });
	
    document.getElementById("Deuteranopia").addEventListener("click", function(){

        Deuteranopia();

        function Deuteranopia(){
            document.body.style.backgroundColor = "#f0f0f0"; // Fundo mais suave
            document.querySelector("h1").style.color = "#1a1a1a"; // Preto mais suave

            let opcoes = document.getElementById("ModosVisuais");
            opcoes.style.backgroundColor = "#f0f0f0";
            opcoes.style.borderColor = "#1a1a1a";
            opcoes.style.color = "#1a1a1a";

            let texto = document.getElementsByTagName("p");
            for (let i = 0; i < texto.length; i++) {
                texto[i].style.color = "#1a1a1a";
            }

            let content = document.getElementsByClassName("content");
            for (let i = 0; i < content.length; i++) {
                content[i].style.backgroundColor = "#f0f0f0";
                content[i].style.borderColor = "#1a1a1a";
            }

            let buttons = document.getElementsByClassName("button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#f0f0f0";
                buttons[i].style.borderColor = "#1a1a1a";
                buttons[i].style.color = "#1a1a1a";
            }
        };

    });

    document.getElementById("Protanopia").addEventListener("click", function(){

        Protanopia();

        function Protanopia(){
            document.body.style.backgroundColor = "#f8f8f8"; // Fundo claro
            document.querySelector("h1").style.color = "#660000"; // Vermelho escuro

            let opcoes = document.getElementById("ModosVisuais");
            opcoes.style.backgroundColor = "#f8f8f8";
            opcoes.style.borderColor = "#660000";
            opcoes.style.color = "#660000";

            let texto = document.getElementsByTagName("p");
            for (let i = 0; i < texto.length; i++) {
                texto[i].style.color = "#660000";
            }

            let content = document.getElementsByClassName("content");
            for (let i = 0; i < content.length; i++) {
                content[i].style.backgroundColor = "#f8f8f8";
                content[i].style.borderColor = "#660000";
            }

            let buttons = document.getElementsByClassName("button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#f8f8f8";
                buttons[i].style.borderColor = "#660000";
                buttons[i].style.color = "#660000";
            }
        };

    });

    document.getElementById("Acromatico").addEventListener("click", function(){

        Acromatismo();

        function Acromatismo(){
            document.body.style.backgroundColor = "#ffffff"; // Fundo branco
            document.querySelector("h1").style.color = "#000000"; // Preto

            let opcoes = document.getElementById("ModosVisuais");
            opcoes.style.backgroundColor = "#ffffff";
            opcoes.style.borderColor = "#000000";
            opcoes.style.color = "#000000";

            let texto = document.getElementsByTagName("p");
            for (let i = 0; i < texto.length; i++) {
                texto[i].style.color = "#000000";
            }

            let content = document.getElementsByClassName("content");
            for (let i = 0; i < content.length; i++) {
                content[i].style.backgroundColor = "#ffffff";
                content[i].style.borderColor = "#000000";
            }

            let buttons = document.getElementsByClassName("button");
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#ffffff";
                buttons[i].style.borderColor = "#000000";
                buttons[i].style.color = "#000000";
            }
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