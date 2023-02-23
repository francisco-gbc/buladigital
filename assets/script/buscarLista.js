
var valorArmazenado = localStorage.getItem("valor");

function render() {
    /*Renderiza no ID do html = listaRegistrosBody*/
    const tbody = document.getElementById('listaRegistrosBody')
    
    if (tbody) {
        /*Filtro Input*/
        var data = listaRegistros.produtox;
        if(FILTRO.trim()){
            const expReg=eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data=data.filter(produtox =>{
                return expReg.test(produtox.produto)||expReg.test(produtox.nRegistro)||expReg.test(produtox.categoria)
                ||expReg.test(produtox.referencia)||expReg.test(produtox.apresentacao)||expReg.test(produtox.cod)||expReg.test(produtox.ean)
            })
        }
        data=data
            /*Ordem alfabética*/
            .sort((a, b) => {
                return a.produto < b.produto ? -1 : 1
            })
            /*Renderizar na tela*/
            .map(produtox => {

                return ` <tr class="lista_tr ${produtox.categoria.toLowerCase()}">
            <td class="produto"><a class="produtoImg" href="${produtox.pagina}"><img src="${produtox.img}"alt="Produto"></a><a href="${produtox.pagina}">${produtox.produto}</a></td>
            <td class="apresentacao">${produtox.apresentacao}</td>
            <td class="referencia">${produtox.referencia}</td>
            <td class="n_registro">${produtox.nRegistro}</td>
            <td class="categoria">${produtox.categoria}</td>
            <td class="bula"><a href="${produtox.bula}"><i class="fa-solid fa-file-lines"></i></a></td>
            </tr>`

            })
            tbody.innerHTML = data.join('')
    }
}


function insertProduto(img, produto, nRegistro) {
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.produtox.push({
        img, produto, nRegistro,categoria,bula
    })
}

/*Ordem de impressão do valor*/
window.addEventListener('load', () => {
    render()
    document.getElementById('inputPesquisa').addEventListener('keyup',e=>{
        pesquisar(e.target.value)
    })
})



/*Sistema Input*/
var FILTRO = ''

function pesquisar(value){
    //value=valorArmazenado;
    FILTRO = value;
    render()
}

/*var input1 = document.getElementById("inputPesquisa");
var button1 = document.getElementById("pesquisar");*/