/* 

Math -> Matematica

- pow(2,2) / potencia / 2 elevado a 2 = 4
- sqrt(25,2) / raiz quadrada de 25 = 5
- PI
- ceil() / arredonda para cima
- floor() / arredonda para baixo

- random() / numero aleatorio entre 0 e 1

const result = Math.pow(2,2)

console.log(result)

*/



function generateNumber() {
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const resultado = document.querySelector('#resultado')

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min >= max){
        resultado.innerHTML = `<span>O valor mínimo deve ser menor que o máximo!</span>`
        return;
    }
    else{
    resultado.innerHTML = `O número sorteado foi: <span>${result}</span>`
    }

}
    

