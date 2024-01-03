let $txt_n = document.getElementById('txt_n')
let $msg = document.getElementById('msg')
let $list = []

function Adicionar() {

    if (!$txt_n.value.length) {
        console.log('Preencha o campo corretamente')
    } else {
        let $number = Number($txt_n.value)
        if ($number < 0 || $number > 100) {
            console.log('Informe um número dentro do esperado')
        }
        else if ($list.indexOf($number) === -1) {
            $list.push($number)
            let $quad = document.getElementById('quad_number')
            let $element_option = document.createElement('option')
            $element_option.textContent = `Valor ${$number} Adicionado`
            $quad.appendChild($element_option)
        }
        else {
            console.log('Numero já informado')
        }
    }
}


function Calcular() {
    $list.sort(function (a, b) {
        return a - b
    })

    $msg.innerHTML = `
    O maior número da lista é ${$list[(($list.length)-1)]}
    `


}