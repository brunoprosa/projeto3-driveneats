let comi = 0;
let bebi = 0;
let sobre = 0;
let total = 0;
const concluir = document.querySelector(".botao-final");
function selecionar(area, item){
    let comidasel = null;
    let bebidasel = null;
    let sobremesasel = null;
    let tem = document.querySelector(area + " .selecionado");
    if (tem !== null){
        tem.classList.remove("selecionado");
    }
    let iem = document.querySelector(item);
    iem.classList.add("selecionado")
    document.querySelector(area + " .selecionado .esconder").classList.remove("esconder")
    comidasel = document.querySelector(".comida .selecionado");
    bebidasel = document.querySelector(".bebida .selecionado");
    sobremesasel = document.querySelector(".sobremesa .selecionado");
    if (comidasel !== null && bebidasel !== null && sobremesasel !== null){
        document.querySelector(".botao-final").removeAttribute("disabled");
        concluir.classList.remove("cinza");
        concluir.classList.add("verde");
        concluir.innerHTML = 'Fechar pedido';
    }
}
function finalizado(){
    let comidareal = Number(document.querySelector(".comida .selecionado .real").innerHTML);
    let comidacent = Number(document.querySelector(".comida .selecionado .cent").innerHTML);
    let bebidareal = Number(document.querySelector(".bebida .selecionado .real").innerHTML);
    let bebidacent = Number(document.querySelector(".bebida .selecionado .cent").innerHTML);
    let sobremesareal = Number(document.querySelector(".sobremesa .selecionado .real").innerHTML);
    let sobremesacent = Number(document.querySelector(".sobremesa .selecionado .cent").innerHTML);
    let totalreal = comidareal + bebidareal + sobremesareal;
    let totalcent =  comidacent + bebidacent + sobremesacent;
    while (totalcent > 99){
        totalcent = totalcent - 100;
        totalreal++;
    }
    comi = document.querySelector(".comida .selecionado h1").innerHTML;
    bebi = document.querySelector(".bebida .selecionado h1").innerHTML;
    sobre = document.querySelector(".sobremesa .selecionado h1").innerHTML;
    total = "R$ " + totalreal + "," + totalcent;
    document.querySelector(".comid .nome").innerHTML = comi;
    document.querySelector(".bebid .nome").innerHTML = bebi;
    document.querySelector(".sobremes .nome").innerHTML = sobre;
    document.querySelector(".comid .preco").innerHTML = comidareal + "," + comidacent;
    document.querySelector(".bebid .preco").innerHTML = bebidareal + "," + bebidacent;
    document.querySelector(".sobremes .preco").innerHTML = sobremesareal + "," + sobremesacent;
    document.querySelector(".total .preco").innerHTML = total;
    document.querySelector(".fundo").classList.remove("esconder");
    document.querySelector(".fundo").classList.add("centro");
}
function cancelar(){
    document.querySelector(".fundo").classList.add("esconder");
    document.querySelector(".fundo").classList.remove("centro");
} 
function finish(){
    const name = prompt("Qual é o seu nome?");
    const lugar = prompt("Qual é o seu endereço de entrega?");
    const link = "https://wa.me/send?phone=5512987000313&text=" + encodeURIComponent('Olá, gostaria de fazer o pedido:') + "%0A"
    + encodeURIComponent('- Prato: ' + comi) + "%0A"
    + encodeURIComponent('- Bebida: ' + bebi) + "%0A"
    + encodeURIComponent('- Sobremesa: ' + sobre) + "%0A"
    + encodeURIComponent('Total: ' + total) + "%0A"
    + "%0A"
    + encodeURIComponent('Nome: ' + name) + "%0A"
    + encodeURIComponent('Endereço: ' + lugar);
    window.open(link);
}