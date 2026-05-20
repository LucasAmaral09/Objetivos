const botoes = document.querySelectorAll (".botao")
console.log(botoes)
const textos = document.querySelectorAll (".aba-conteudo")
console.log(textos)

for (let i = 0; i<botoes.length;i++){
    botoes [i].onclick = function (){
        for (let j=0; j<botoes.length; j++){
            botoes [j]. classList.remove("ativo")
            textos [j]. classList.remove("ativo")
        }         
            botoes [i]. classList.add("ativo")
            textos [i]. classList.add("ativo")
        
function atualizarCronometro() {
    const [dias, horas, minutos, segundos] = calculaTempo

    if(numeros.lenght >=0){
        numeros[0].textContent = dias
        numeros[1].textContent = horas
        numeros[2].textContent = minutos
        numeros[3].textContent = segundos
    }
}
function comecaCronometro