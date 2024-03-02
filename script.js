function rodar_imagem1(){
    var imagem_adc = window.document.getElementById('adc_resposta')
    var adc_opcoes = window.document.getElementsByName('adc')
    var adc_escolhido = ''
    if (adc_opcoes[0].checked){
        var adc_escolhido = 'Tristana'
    } else if (adc_opcoes[1].checked){
        var adc_escolhido = 'Ashe'
    } else if (adc_opcoes[2].checked){
        var adc_escolhido = 'Sivir'
    }
}