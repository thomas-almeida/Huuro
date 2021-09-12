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

//Montante dos impostos acima (facilita na soma total)
var montante_Impostos = pis_pasep + cofins + multa + juros_Mora + at_monetario + cosip_sp

//capturando componentes HTML
var txt_Valor2 = document.getElementById('valor-dash')
var btn_Calcular_2 = document.getElementById('btn-calc-2')

var tusd_Dash = document.getElementById('tusd-total')
var te_Dash = document.getElementById('te-total')
var redflag_Dash = document.getElementById('redflag-total')
var pis_pasep_Dash = document.getElementById('pis-pasep-total')
var confins_Dash = document.getElementById('cofins-total')
var multa_Dash = document.getElementById('multa-total')
var juros_Mora_Dash = document.getElementById('jur-mora-total')
var at_monetario_Dash = document.getElementById('at-monet-total')
var cosip_sp_Dash = document.getElementById('cosip-sp-total')

var total_ContaDash = document.getElementById('total-dash')
var total_ContaInfo = document.getElementById('total-info')

var tusd_base = document.getElementById('tusd-dash')
var te_base = document.getElementById('te-dash')
var redflag_base = document.getElementById('redflag-dash')
var kwh_base = document.getElementById('resultado')

function load() {

    // Formatando o valor que vem da URL
    var local = window.location.href
    var localFormatOne = local.substring(local.indexOf('?') + 1)
    var localFormatTwo = localFormatOne.replace('=', '')
    console.log(localFormatTwo)

    // Transformando esse valor formatado de string para Float
    var valorFloat = parseFloat(localFormatTwo)

    //Calculando TUSD e TE, mostrando Dashboard
    var tusd_Calculado = valorFloat * tusd
    tusd_Dash.innerText = 'R$ ' + tusd_Calculado.toFixed(2).replace('.', ',')
    var te_Calculado = valorFloat * te
    te_Dash.innerText = 'R$ ' + te_Calculado.toFixed(2).replace('.', ',')

    //Mostrando Detalhes na Dashboard
    redflag_Dash.innerText = 'R$ ' + RedFlag2.toFixed(2).replace('.', ',')
    pis_pasep_Dash.innerText = 'R$ ' + pis_pasep.toFixed(2).replace('.', ',')
    confins_Dash.innerText = 'R$ ' + cofins.toFixed(2).replace('.', ',')
    multa_Dash.innerText = 'R$ ' + multa.toFixed(2).replace('.', ',')
    juros_Mora_Dash.innerText = 'R$ ' + juros_Mora.toFixed(2).replace('.', ',')
    at_monetario_Dash.innerText = 'R$ ' + at_monetario.toFixed(2).replace('.', ',')
    cosip_sp_Dash.innerText = 'R$ ' + cosip_sp.toFixed(2).replace('.', ',')

    tusd_base.innerText = tusd
    te_base.innerText = te
    redflag_base.innerText = RedFlag2
    kwh_base.innerText = valorFloat + " Kwh"

    // Calculando e Mostrando Total na Dashboard
    var total_Calculado = tusd_Calculado + te_Calculado + RedFlag2 + montante_Impostos
    total_ContaDash.innerText = 'R$ ' + total_Calculado.toFixed(2).replace('.', ',')
    total_ContaInfo.innerText = 'R$ ' + total_Calculado.toFixed(2).replace('.', ',')

}