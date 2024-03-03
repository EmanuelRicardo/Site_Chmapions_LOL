//AD carry
function rodar_imagem1(){
    var imagem_adc = window.document.getElementById('adc_resposta')
    var adc_opcoes = window.document.getElementsByName('adc')
    var adc_escolhido = ''
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')
    
    imagem_adc.innerHTML = ' '
    if (adc_opcoes[0].checked){
        img.setAttribute ('src', 'imagens/tristana.png')
    } else if (adc_opcoes[1].checked){
        img.setAttribute ('src', 'imagens/ashe.png')
        var adc_escolhido = 'Ashe'
    } else if (adc_opcoes[2].checked){
        var adc_escolhido = 'Sivir'
        img.setAttribute ('src', 'imagens/sivir.png')
    }

    imagem_adc.appendChild(img)
}

// MID

function rodar_imagem2(){
    
}