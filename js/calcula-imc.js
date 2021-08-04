var titulo = document.querySelector(".titulo");//selecionando  uma seletor css com .querySelector
titulo.textContent = "Aparecida Nutricionista";// alterando o conteúdo com .textContent

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)
   

    if (pesoEhValido!=true) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
       
    }

    if (alturaEhValida!=true) {
        //console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        
        paciente.classList.add("paciente-invalido");//adicionando uma classe - "paciente-invalido" com .classList.add("")
    }

    if (pesoEhValido && alturaEhValida) {
       var imc = calculaImc(peso,altura);
       tdImc.textContent = imc
    }
}
function validaPeso(peso){
    if(peso >0 && peso<1000){
        return true;
    }else{
        return false
    }
}
function validaAltura(altura){
    if(altura>0 && altura <=3.0){
        return true;
    }else{
        return false;
    }
}
function validaNome(nome){
    if(nome.length>0){
        return true;
    }else{
        return false;
    }
}
function validaGordura(gordura){
    if(gordura>0 && gordura<1000){
        return true;
    }else{
        return false;
    }
}
function calculaImc(peso,altura){
    var imc = 0
    imc = peso/(altura*altura)
    return imc.toFixed(2)// colocando duas casas decimais com .toFixed(2)
}

