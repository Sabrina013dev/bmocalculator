const img = document.querySelector('.tela');
const tela = document.querySelector('.calculadora__tela');

function insert(num)
{   
    
    img.remove();
    tela.classList.add('tela-branca')
    let numero = tela.innerHTML;
    tela.innerHTML = numero + num;
}
function clean()
{
    tela.innerHTML = "";
    location.reload();
}
function back()
{
    let resultado = tela.innerHTML;
    tela.innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    let resultado = tela.innerHTML;
    if(resultado)
    {
        tela.innerHTML = eval(resultado);
    }
    else
    {
        tela.innerHTML = "Nada..."
    }
}