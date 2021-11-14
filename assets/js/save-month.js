'use strict'

var data = new Date()
var mes = data.getMonth()
var number_month = data.getMonth()
var year = data.getFullYear()

var valor_conta = document.getElementById('total-info')
var btn_save = document.getElementById('btn-save')
var month_body = document.getElementById('month-div')

switch (mes) {
    case 0:
        mes = "📅 Janeiro"
        break
    case 1:
        mes = "📅 Fevereiro"
        break
    case 2:
        mes = "📅 Março"
        break
    case 3:
        mes = "📅 Abril"
        break
    case 4:
        mes = "📅 Maio"
        break
    case 5:
        mes = "📅 Junho"
        break
    case 6:
        mes = "📅 Julho"
        break
    case 7:
        mes = "📅 Agosto"
        break
    case 8:
        mes = "📅 Setembro"
        break
    case 9:
        mes = "📅 Outubro"
        break
    case 10:
        mes = "📅 Novembro"
        break
    case 11:
        mes = "📅 Dezembro"
        break
}

btn_save.addEventListener('click', function () {

    //create elements
    var month_Div = document.createElement('div')
    var month_Ul = document.createElement('ul')
    var month_li = document.createElement('li')
    var month_li_div = document.createElement('div')
    var month_h3 = document.createElement('h3')
    var month_h1 = document.createElement('h1')

    //append's
    month_body.appendChild(month_Div)
    month_Div.appendChild(month_Ul)
    month_Ul.appendChild(month_li)
    month_li.appendChild(month_li_div)
    month_li.classList.add('month')
    month_li_div.appendChild(month_h3)
    month_li_div.appendChild(month_h1)

    //get current values
    month_h3.innerText = mes + " // " + year
    month_h1.innerText = valor_conta.innerText

})
