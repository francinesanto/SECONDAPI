class CampoQtsMaxima extends Error {
    constructor(campo){
        const mensagem = `O campo ${campo} ultrapassou a quantidade máxima de 60 caracteres`;
        super(mensagem);
        this.name = 'campoQtdMaxima';
        this.idError = 2;

    }
}

module.exports = CampoQtsMaxima;