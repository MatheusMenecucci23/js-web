var campoFiltro = document.querySelector("#filtrar-tabela");//selecionando o campo 

campoFiltro.addEventListener("input", function(){// adicionando um evento quando algo for digitado no compoFiltro
    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length>0){//verificando se tem algo digitado no campo filtro
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent

            var expressao = new RegExp(this.value,"i");//expressão regular de busca com RegExp(o que será buscado,"letra minuscula");

            if(!expressao.test(nome)){//verificando se a letra do nome do paciente existe com .teste("o que você quer tester - no caso se o nome do usuário bate com o digitado")
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")//removendo uma classe, no caso invisivel
            }
        }
    }
    else{
        for (let i = 0; i < pacientes.length; i++) {//removendo a classe se o tiver nada digitado no campoFiltro
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = tdNome.textContent
            paciente.classList.remove("invisivel")
        }

    }
    
})