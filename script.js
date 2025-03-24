function calcular() {
    var idade = window.document.querySelector('input#idade').value
    var res = window.document.querySelector('div#resultado')

if (idade === "" || idade < 0) {
        res.innerHTML = `<p><strong>Por favor, insira uma idade válida! ⚠️</strong></p>`
} else if (idade >= 18) {
    res.innerHTML = `<p><strong>Você já pode dirigir! 🚗✅</strong></p>`
 } else if (idade < 10) {
    res.innerHTML = `<p><strong>Você ainda é um pitoco! 🍼</strong></p>`
 } else if (idade >= 10 && idade <= 17) { 
    res.innerHTML = `<p><strong>Quase lá! 😉</strong></p>`
 } else {
    res.innerHTML = `<p><strong>Você ainda não pode dirigir! 🚫👶</strong></p>`
 }
}