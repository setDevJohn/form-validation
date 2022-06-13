let campos = document.querySelectorAll(".campo");
let botaoEnviar = document.getElementById("btn-enviar");

campos.forEach(function(campo){
    campo.addEventListener('change', function(){
        const idVerificacaoValido = campo.id;
        if(campo.value !== ""){
            document.getElementsByClassName(idVerificacaoValido)[0].classList.add("valido");
            document.getElementsByClassName(idVerificacaoValido)[0].classList.remove("invalido");
        }else{
            document.getElementsByClassName(idVerificacaoValido)[0].classList.remove("valido");
        }
    });
});

botaoEnviar.addEventListener('click', function(){
    campos.forEach(function(campo){
        const idVerificacaoInvalido = campo.id;
        if(campo.value === ""){
            document.getElementsByClassName(idVerificacaoInvalido)[0].classList.add("invalido");
        };
    });
});