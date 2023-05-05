import Select from 'react-select';
import React, { useEffect, useState , useId} from 'react'
import styles from './busca.module.scss';
import {BiSearch} from 'react-icons/bi';
import {ImArrowRight, ImArrowLeft} from 'react-icons/im';
import { lojaId, urlRequisicao} from "../../utils";
import ListagemVeiculos from '../../components/listagemVeiculos';
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";

export default function Busca(props) {
    const {
      categoria,
      resultados,
      titulo,
      ordenacao=true,
      temPaginacao
    } = props    
    const [marcas, setMarcas]                   = useState([]);
    const [marca, setMarca]                     = useState("Marca");
    const [modelos, setModelos]                 = useState([]);
    const [modelo, setModelo]                   = useState("Modelo");
    const [estoque, setEstoque]                 = useState([]);    
    const [loadingSelect, setLoadingSelect]     = useState(true);
    const [loadingEstoque, setLoadingEstoque]     = useState(true);
    const [paginacaoAtual, setPaginacaoAtual]   = useState(0);
    const listaOrdenacao                        = [
      {value : "", label : "Ordenar"},
      {value : "maiorvalor", label : "Maior valor"},
      {value : "menorvalor", label : "Menor valor"},
      {value : "marca", label : "Marca"},
      {value : "modelo", label : "Modelo"},
      {value : "ano", label : "Ano"},
    ]
    const [optionOrdenacao, setOptionOrdenacao]   = useState("");
    const router = useRouter();
    const { view } = router.query;
    const redirecionaPag = async (marca="", modelo="", ordem="", pagina=1) => {
      router.push(`/estoque?marca=${marca}&modelo=${modelo}&ordenacao=${ordem}&pagina=${pagina}`);
    };

    useEffect(() => {
        setLoadingSelect(false)
        handleGetEstoque()
        getMarcas()
    }, [])
    function handleGetEstoque() {
      let query = router.query      
      getEstoque(query.marca, query.modelo, query.ordenacao, query.pagina)
      if(query){
        if(query.marca) setMarca(query.marca);
        if(query.modelo) setModelo(query.modelo);
        if(query.ordenacao) setOptionOrdenacao(query.ordenacao);       
        if(query.pagina) setPaginacaoAtual(query.pagina);
      }
    }
    useEffect(() => {
      setLoadingEstoque(true)
      handleGetEstoque()
    }, [router.query])
    useEffect(() => {
        if(marca != "Marca")getModelos()
    }, [marca])  

    async function getEstoque(marca="", modelo="", ordenacao="", pagina=1) {
        let body = JSON.stringify({
          "acoes": 
          [
            {
            "acao": categoria || "estoque",
            "params":
              {
                resultados  : resultados || 20,
                ordenacao   : ordenacao,
                marca       : marca == "Marca" ? "" : marca,
                modelo      : modelo == "Modelo" ? "" : modelo,
                pagina      : pagina  
              }
            }
          ],
          "loja": lojaId
      })
      const response = await fetch(urlRequisicao,{
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body
      })
      
      const data = await response.json()
      setEstoque(data[categoria || "estoque"]);
      setLoadingEstoque(false)
    }

    async function getMarcas() {
      let body = JSON.stringify({
          "acoes": 
          [         
            {
            "acao": "marcas",
            "params":{ "loja":  lojaId}
            }
          ],
          "loja": lojaId
      })
      const response = await fetch(urlRequisicao,{
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body
      })
      
      const data = await response.json()
      setMarcas(data.marcas)
    }
    
    async function getModelos() {
        let body = JSON.stringify({
            "acoes":
            [
                {
                "acao": "modelos",
                "params":{ "marca": marca }
                }
            ],
            "loja": lojaId
        })
        const response = await fetch(urlRequisicao,{
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body
        })
        
        const data = await response.json()
        setModelos(data.modelos)      
      }


    return(
        <div className={styles.envolveBusca}>
            <div className={styles.buscaVeiculos}>
            <p className={styles.titulo}>{titulo || "Estoque"}</p>
            <form className={styles.busca}>
                {
                !loadingSelect 
                ?
                  <>
                    <Select 
                      className={styles.buscaMarcas} 
                      options={[{ value: 'Marca', label: 'Marca' }, ...marcas?.map((marca, index) => {return { value: marca.mar_nome, label: marca.mar_nome }})]} 
                      defaultValue={{ value: 'Marca', label: 'Marca' }} 
                      onChange={item => {setMarca(item.value); setModelo("Modelo"); setModelos([]); setOptionOrdenacao("")}}
                      value={{ value: marca , label: marca}}
                      instanceId="selectMarcas"
                    />
                    <Select 
                      className={styles.buscaModelos} 
                      options={[{ value: 'Modelo', label: 'Modelo' }, ...modelos?.map((modelos, index) => {return { value: modelos.vei_modelo, label: modelos.vei_modelo}})]} 
                      defaultValue={{ value: 'Modelo', label: 'Modelo'}} 
                      onChange={item => {setModelo(item.value); setOptionOrdenacao("")}}
                      value={{ value: modelo, label: modelo }}
                      instanceId="selectModelos"
                    />
                  </>
                :
                null              
                }
                <button type='button' onClick={() => redirecionaPag(marca, modelo)}><BiSearch style={{fontSize: "17"}}/> Buscar </button>
            </form>
            </div>
              {
                ordenacao ?
                  <div className={styles.envolveOrdenacao}>
                    <span className={styles.veiculosEncontradosTexto}>{estoque.total} veículos encontrados</span>                    
                    <Select 
                      className={styles.selectOrdenacao}
                      options={listaOrdenacao}
                      defaultValue={{ value: 'Ordenar', label: 'Ordenar'}} 
                      onChange={item => redirecionaPag(router.query.marca || marca, router.query.modelo || modelo, item.value)}
                      value={listaOrdenacao.find(item => {item.value == optionOrdenacao})}
                      instanceId="selectOrdenacao"
                    />
                  </div>
                : null
              }
                <ListagemVeiculos anuncios={estoque?.anuncios} loading={loadingEstoque}/>           
              <div>
                {
                  temPaginacao  ?
                  
                    <ReactPaginate                  
                      previousLabel={<ImArrowLeft style={{color: "#000000", marginBottom: -2 }} />}
                      nextLabel={<ImArrowRight style={{color: "#000000", marginBottom: -2}}/>}
                      pageCount={estoque?.total_paginas || 1}
                      onPageChange={(pag) => {
                         redirecionaPag(router.query.marca || marca, router.query.modelo || modelo, router.query.ordenacao || optionOrdenacao, pag.selected+1)
                      }}
                      containerClassName={"pagination"}
                      activeClassName={styles.paginaAtiva}
                      className={styles.envolvePaginacao}
                      previousClassName={paginacaoAtual == 1 ? styles.previousLabel : null}
                      nextClassName={paginacaoAtual == estoque.total_paginas ? styles.nextLabel : null}
                      forcePage={ paginacaoAtual - 1 }
                  />
                  :
                  null
                }
              </div>
        </div> 
    )
};