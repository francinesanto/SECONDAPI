//exercicio desenvolvido na aula 3 da segunda semana de curso, não tem nada a ver com  a api

const listaCompras = {
    batata: 13,
    sabao: 3,
    abobrinha: 5,
    toalha:1,
    cenoura:8,
    balas:10,
    xuxu:0
}



const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve,ms))
}

const pegarQtDeItem = async (item) => {
    await sleep(3000)
    return listaCompras[item]
}

const looping = async _ =>{
    try{
        console.log('Começou')
        for(const key of Object.keys(listaCompras)){
            const qtdItem = await pegarQtDeItem(key)
            console.log(key, qtdItem);
        }
        console.log('Terminou')
    }catch(error){
        console.log()
    }
}

looping()