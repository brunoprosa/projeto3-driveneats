let comidasel = null;
let bebidasel = null;
let sobremesasel = null;
function selecionar(area, item){
    let tem = document.querySelector(area + " .selecionado");
    if (tem !== null){
        tem.classList.remove("selecionado");
    }
    let iem = document.querySelector(item);
    iem.classList.add("selecionado")
    comidasel = document.querySelector(".comida .selecionado");
    bebidasel = document.querySelector(".bebida .selecionado");
    sobremesasel = document.querySelector(".sobremesa .selecionado");
    console.log (comidasel, bebidasel, sobremesasel);
}
if (comidasel !== null && bebidasel !== null && sobremesasel !== null){
    GamepadButton.removeprop("disabled");
    const concluir = document.querySelector("botao-final");
    concluir.classList.add("habilitado");
    concluir.innerHTML = 'Fechar pedido';
}
