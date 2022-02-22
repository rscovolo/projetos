function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO Verique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem_criança_pq.jpg')

            } else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'homem_jovem_pq.jpg')

            } else if (idade >=21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'homem_adulto_pq.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'homem_idoso_pq.jpg')

            }
        } else if (fsex[1]) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher_criança_pq.jpg')

            } else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher_jovem_pq.jpg')

            } else if (idade >=21 && idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher_adulta_pq.jpg')

            } else {
                //idoso
                img.setAttribute('src', 'mulher_idosa_pq.jpg')

            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}