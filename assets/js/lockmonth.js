var data = new Date
var mes = data.getMonth()


var months_array = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

function lockMonth() {
    console.log(months_array[mes])
}


console.log(lockMonth())