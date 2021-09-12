'use strict'

//Valores do KWH atuais
var tusd = 0.40949
var te = 0.38318

//valor da bandeira atual
var RedFlag2 = 54.56

//Impostos
var pis_pasep = 1.63
var cofins = 7.49
var multa = 16.62
var juros_Mora = 2.20
var at_monetario = 2.11
var cosip_sp = 9.66

var montante_Impostos = pis_pasep + cofins + multa + juros_Mora + at_monetario + cosip_sp

//componentes
var txt_Valor = document.getElementById('valor')
var btn_Calcular = document.getElementById('btn-calc-1')

btn_Calcular.addEventListener('click', function () {

    var valorUsuario = txt_Valor.value

    var total_TUSD = valorUsuario * tusd
    var total_TE = valorUsuario * te

    var total = total_TUSD + total_TE + montante_Impostos + RedFlag2

    console.log(total_TE.toFixed(2) + ' +')
    console.log(total_TUSD.toFixed(2) + ' +')
    console.log(RedFlag2.toFixed(2) + ' +')
    console.log(montante_Impostos.toFixed(2) + ' +')
    console.log('______')
    console.log(total.toFixed(2))


})