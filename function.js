function Somar(a){
    let soma = a.reduce(function(c, array){
        return c + array
    },0)

    return soma
}

function remover() {
    let $quad = document.getElementById('quad_number')
    let $value = $quad.options[$quad.selectedIndex].value

    if($quad.selectedIndex !== -1){
        console.log(`Valor pego: ${$value}`)
    }

    let $confirm = confirm('Deseja remover esse elemento?')

    if($confirm){
        let Index = $list.indexOf(Number($value))
        $list.splice(Index, 1)
        $quad.remove($quad.selectedIndex)
    }
}