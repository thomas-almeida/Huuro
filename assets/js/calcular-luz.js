'use strict'

function load() {

     // Formatando o valor que vem da URL
    var local = window.location.href
    var localFormatOne = local.substring(local.indexOf('?') + 1)
    var localFormatTwo = localFormatOne.replace('=', '')
    console.log(localFormatTwo)

    //Tarifas TUSD
    var tarifa_tusd = 0.40946
    var valor_tusd = localFormatTwo * tarifa_tusd
    //Tarufas TE
    var tarifa_te = 0.38318
    var valor_te = localFormatTwo * tarifa_te

    //Bandeira
    var flag = 76.87

    //Impostos
    var cosip_sp = 9.66
    var pis_pasep = localFormatTwo * 0.0070
    var cofins = localFormatTwo * 0.0323

    var impostosGerais = cosip_sp + pis_pasep + cofins
    var valor_final = valor_te + valor_tusd + flag + impostosGerais

    // ===============

    //capturando componentes HTML
    var tusd_Dash = document.getElementById('tusd-total')
    var te_Dash = document.getElementById('te-total')
    var redflag_Dash = document.getElementById('redflag-total')
    var pis_pasep_Dash = document.getElementById('pis-pasep-total')
    var confins_Dash = document.getElementById('cofins-total')
    var cosip_sp_Dash = document.getElementById('cosip-sp-total')

    var total_ContaDash = document.getElementById('total-dash')
    var total_ContaInfo = document.getElementById('total-info')

    var tusd_base = document.getElementById('tusd-dash')
    var te_base = document.getElementById('te-dash')
    var redflag_base = document.getElementById('redflag-dash')
    var kwh_base = document.getElementById('resultado')


    // Transformando esse valor formatado de string para Float
    var valorFloat = parseFloat(localFormatTwo)

    //Calculando TUSD e TE, mostrando Dashboard
    tusd_Dash.innerText = 'R$ ' + valor_tusd.toFixed(2).replace('.', ',')
    te_Dash.innerText = 'R$ ' + valor_te.toFixed(2).replace('.', ',')

    //Mostrando Detalhes na Dashboard
    redflag_Dash.innerText = 'R$ ' + flag.toFixed(2).replace('.', ',')
    pis_pasep_Dash.innerText = 'R$ ' + pis_pasep.toFixed(2).replace('.', ',')
    confins_Dash.innerText = 'R$ ' + cofins.toFixed(2).replace('.', ',')
    cosip_sp_Dash.innerText = 'R$ ' + cosip_sp.toFixed(2).replace('.', ',')

    tusd_base.innerText = tarifa_tusd
    te_base.innerText = tarifa_te
    redflag_base.innerText = flag
    kwh_base.innerText = valorFloat + " Kwh"

    // Calculando e Mostrando Total na Dashboard
    total_ContaDash.innerText = 'R$ ' + valor_final.toFixed(2).replace('.', ',')
    total_ContaInfo.innerText = 'R$ ' + valor_final.toFixed(2).replace('.', ',')

}