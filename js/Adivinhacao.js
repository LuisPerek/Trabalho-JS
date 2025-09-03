var randomNumeber, tentativa

randomNumeber = Math.floor(Math.random() * 100) + 1
tentativa = 0
while (tentativa != randomNumeber){
    tentativa = prompt("Digite um numero entre 0 e 100")
    if (tentativa < randomNumeber){
        alert("muito baixo!")
    }else if (tentativa > randomNumeber){
        alert("muito alto!")
    }else{
        alert("acertou!")
        break
    }
}