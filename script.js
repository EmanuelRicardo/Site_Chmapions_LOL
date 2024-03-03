//AD carry
function rodar_imagem1(){
    var adc_resposta_img = window.document.getElementById('adc_resposta_img')
    var adc_opcoes = window.document.getElementsByName('adc')
    var adc_escolhido = ''
    var img_adc = document.createElement('img')

    img_adc.setAttribute('id', 'foto_adc')
    
    adc_resposta_img.innerHTML = ' '
    if (adc_opcoes[0].checked){
        img_adc.setAttribute ('src', 'imagens/tristana.png')
    } else if (adc_opcoes[1].checked){
        img_adc.setAttribute ('src', 'imagens/ashe.png')
        var adc_escolhido = 'Ashe'
    } else if (adc_opcoes[2].checked){
        var adc_escolhido = 'Sivir'
        img_adc.setAttribute ('src', 'imagens/sivir.png')
    }

    adc_resposta_img.appendChild(img_adc)
}

// MID

function rodar_imagem2(){
    var mid_resposta_img = window.document.getElementById ('mid_resposta_img')
    var mid_opcoes = window.document.getElementsByName('mid')
    var img_mid = window.document.createElement('img')
    img_mid.setAttribute ('id', 'foto_mid')
    mid_resposta_img.innerHTML = ''

    if (mid_opcoes[0].checked){
        img_mid.setAttribute ('src', 'imagens/veigar.png')
    } else if (mid_opcoes[1].checked){
        img_mid.setAttribute ('src', 'imagens/zed.png')
    } else if (mid_opcoes[2].checked){
        img_mid.setAttribute ('src', 'imagens/aurelionsol.png')
    }
    mid_resposta_img.appendChild(img_mid)
}


function rodar_imagem3(){
    var jg_resposta_img = window.document.getElementById ('jg_resposta_img')
    var jg_opcoes = window.document.getElementsByName('jg')
    var img_jg = window.document.createElement('img')

    img_jg.setAttribute ('id', 'foto_jg')

    jg_resposta_img.innerHTML = ''

    if (jg_opcoes[0].checked){
        img_jg.setAttribute ('src', 'imagens/ww.png')
    } else if (jg_opcoes[1].checked){
        img_jg.setAttribute ('src', 'imagens/zac.png' )
    } else if (jg_opcoes[2].checked){
        jg_resposta_img.innerHTML = "Viego"
        img_jg.setAttribute ('src', 'imagens/viego.png')
    }

    jg_resposta_img.appendChild(img_jg)
}