let $tnumber = document.getElementById('t_number')

function Adicionar(){
    let $txt_number = document.getElementById('txt_n').value
    
    if($txt_number.length == 0){
        alert('Informe corretamente o campo')
    }
    
    let $number = Number($txt_number)

    else if($number < 0 || $number > 100){
        alert ('Informe o número de 1 a 100')
    }

    else{
        alert('opa!')
    }
}