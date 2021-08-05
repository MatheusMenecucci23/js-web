var botaoAdicionar = document.querySelector("#adicionar-paciente");

//O QUE BOTÃO DEVE FAZER:
botaoAdicionar.addEventListener("click", function(event) {//criando uma função anonima
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form)//pegando os dados do paciente

    var erros = validaPaciente(paciente);

    if(erros.length>0){//exibindo mensagens de erro
        exibeMensagensDeErro(erros)
        return
    }
   
    adicionaPacienteNaTabela(paciente)

    erros = "";
    form.reset();//função padrão para resetar o formulário com .reset


});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)//montando a linha
    var tabela = document.querySelector("#tabela-pacientes");//pegando a tabela
    tabela.appendChild(pacienteTr);//adicionando a linha na tabela
}

//Pegando os valores do formulário
function obtemPacienteFormulario(form){
    var paciente = {//criando um objeto 
        nome: form.nome.value,//atributos do objetos
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}

//criando uma tabela
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");//criando um elemento HTML com .creatElement("tag que você deseja criar")
    pacienteTr.classList.add("paciente");

    
    var nomeTd = montaTd(paciente.nome,"info-nome");
    var pesoTd =  montaTd(paciente.peso,"info-peso");
    var alturaTd =  montaTd(paciente.altura,"info-altura");
    var gorduraTd =  montaTd(paciente.gordura,"info-gordura");
    var imcTd = montaTd(paciente.imc,"info-imc");

    pacienteTr.appendChild(nomeTd);//colocando um elemento dentro do outro com .appenChild("nome do elemento que ficará dentro")
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;

}

//Validando os dados do paciente
function validaPaciente(paciente){

    var erros = [];

    if (validaPeso(paciente.peso)!=true){
       erros.push("Peso é inválido")
    }
    if (validaAltura(paciente.altura)!=true){
        erros.push("Altura é invalida")
    }
    if (!validaNome(paciente.nome)){
        erros.push("Paciente sem nome")
    }
    if (!validaGordura(paciente.gordura)){
        erros.push("Gordura Inválida")
    }
    return erros

}

//criando uma linha dinamicamente
function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td
}

//criando mensagens de erro 
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "" //podemos obter o conteúdo HTML (HTML interno) de um elemento.
    erros.forEach(function(erro){//Com o forEach lê se, para cada item do ERROS, execute a function(parametro)
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);

    })
}
