var botaoAdicionar = document.querySelector("#buscar-paciente")//buscando o botão
botaoAdicionar.addEventListener("click", function(){//atribuindo uma função para o botão
    console.log("Buscando paciente")

    //USANDO A TÉCNICA DE AJAX

    var xhr = new XMLHttpRequest()//buscando/requisitando um link/servidor

    ///CONFIGURNADO O ENDEREÇOS COM .open("metodo que você quer utilizar","endereço que você vai utilizar o método")
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")

    //adicionando um evento quando o xhr estiver "load", ou seja, carregado
    xhr.addEventListener("load",function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200){//número 200 indica que o xhr conseguiu buscar o servidor .status indica o número do código
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText//o texto de reposta da busca do XHR
            var pacientes = JSON.parse(resposta)//transformando/converter o textão -resposta- em objeto JavaScript com JSON.parse(o que você quer converter)
            //pacientes vira um array
            pacientes.forEach(function (paciente) {//PARA CADA item - paciente - da minha lista - pacientes - faça
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            erroAjax.classList.remove("invisivel")
        }
       
    })

    //ENVIANDO A BUSCA/REQUISIÇÃO
    xhr.send()
})

