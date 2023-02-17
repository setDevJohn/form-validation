const campos = document.querySelectorAll(".campo");
const botaoEnviar = document.getElementById("btn-enviar");

campos.forEach(campo =>{
    campo.addEventListener('change', function(){
        const idVerificacao = campo.id;
        if(campo.value !== ""){
            document.getElementsByClassName(idVerificacao)[0].classList.add("valido");
            document.getElementsByClassName(idVerificacao)[0].classList.remove("invalido");
        }else{
            document.getElementsByClassName(idVerificacao)[0].classList.remove("valido");
        }
    });
});

botaoEnviar.addEventListener('click', function(){
    campos.forEach(function(campo){
        const idVerificacaoInvalido = campo.id;
        if(campo.value === ""){
            campo.classList.add('invalido')
            document.getElementsByClassName(idVerificacaoInvalido)[0].classList.add("invalido");
        };
    });
});