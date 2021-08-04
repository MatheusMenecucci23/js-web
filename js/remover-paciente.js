var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;//event.target = o código que sofreu o evento
    var paiDoAlvo = alvoEvento.parentNode;//pega o pai de quem sofreu o evento  
    paiDoAlvo.classList.add("fadeOut");
    setTimeout(function(){// com setTimeout a operação de dentro espera um tempo para ser executada, no caso 400 milissegundos 
        paiDoAlvo.remove();//removendo o cliente da tabela com a função padrão .remove()   
    },400)//tempo de espera
})
//dblclick = dois click
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("Fui clicado com um duplo click")
//         this.remove();//o this referencia o paciente e o .remove() é uma função padrão do js
//     })
// })
