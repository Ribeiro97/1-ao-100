let $txt_n = document.getElementById('txt_n')

function Adicionar() {

    if (!$txt_n.value.length || isNaN($number)) {
        console.log('Preencha o campo corretamente')
    } else {
        let $number = Number($txt_n.value)

        if ($number < 0 || $number > 100) {
            console.log('Informe um número dentro do esperado')
        }

        else {
            
        }
    }
}