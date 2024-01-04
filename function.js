function Somar(a){
    let soma = a.reduce(function(c, array){
        return c + array
    },0)

    return soma
}