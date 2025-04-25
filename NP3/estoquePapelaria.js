class CadastroProdutos{
    constructor(id, nome, preco){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    cadastrarProdutos(this, id, nome, preco){

    }

    getResumoProdutos(this, id, nome, preco){

    }
}

class Estoque {
    constructor(idProduto, quantidade){
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        const estoque = []
    }

    adicionarEstoque(this, idProduto, quantidade){
        
    }

    removerEstoque(this, idProduto, quantidade){

    }
}

class Relatorios extends Estoque{
    constructor(idProduto, quantidade, estoque){
        super(idProduto, quantidade, estoque)
        this.idProduto = idProduto
        this.quantidade = quantidade
        this.estoque = estoque
    }

    gerarRelatorio(this, idProduto, estoque){

    }

    calcularTotal(){

    }

}
