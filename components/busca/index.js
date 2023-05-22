import Select from 'react-select';
import React, { useEffect, useState , useId} from 'react'
import styles from './busca.module.scss';
import {BiSearch} from 'react-icons/bi';
import {ImArrowRight, ImArrowLeft} from 'react-icons/im';
import { lojaId, urlApiLocal, urlRequisicao} from "../../utils";
import ListagemVeiculos from '../../components/listagemVeiculos';
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import {getMarcas} from "../../pages/api";

export default function Busca(props) {
    const {
      titulo,
      ordenacao=true,
      temPaginacao,
      anuncios
    } = props    
    const [marcas, setMarcas]                   = useState([]);
    const [marca, setMarca]                     = useState("Marca");
    const [modelos, setModelos]                 = useState([]);
    const [modelo, setModelo]                   = useState("Modelo");
    const [estoque, setEstoque]                 = useState([]);    
    const [loadingSelect, setLoadingSelect]     = useState(true);
    const [loadingEstoque, setLoadingEstoque]   = useState(false);
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
    const redirecionaPag = async (marca="", modelo="", ordem="", pagina=1) => {
      router.push(`/estoque?marca=${marca}&modelo=${modelo}&ordenacao=${ordem}&pagina=${pagina}`);
    };

    useEffect( () => {
      setLoadingSelect(false);
      getMarcas();
    }, [])
    function handleGetEstoque() {
      let query = router.query

      if(query){
        if(query.marca) setMarca(query.marca);
        if(query.modelo) setModelo(query.modelo);
        if(query.ordenacao) setOptionOrdenacao(query.ordenacao);       
        if(query.pagina) setPaginacaoAtual(query.pagina);
      }
    }
    useEffect(() => {
      handleGetEstoque()
    }, [router.query])
    useEffect(() => {
        if(marca != "Marca")getModelos()
    }, [marca])  

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
      const response = await fetch(urlApiLocal,{
        method: 'POST',
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
                  <span className={styles.veiculosEncontradosTexto}>{anuncios.total ? anuncios.total : ""} 
                  {
                    anuncios.total ?
                      anuncios.total == 1 ? " veículo encontrado" : " veículos encontrados"
                    :
                    "Nenhum veículo encontrado"
                  }
                  </span>
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
              <ListagemVeiculos anuncios={anuncios?.anuncios} loading={loadingEstoque}/>
              <div>
                {
                  temPaginacao && anuncios.total_paginas > 1? 
                    (
                      <ReactPaginate
                          pageRangeDisplayed={1}
                          marginPagesDisplayed={1}
                          previousLabel={<ImArrowLeft style={{ color: "#000000", marginBottom: -2 }} />}
                          nextLabel={<ImArrowRight style={{ color: "#000000", marginBottom: -2 }} />}
                          pageCount={anuncios?.total_paginas || 1}
                          onPageChange={(pag) => {
                            redirecionaPag(
                              router.query.marca || '',
                              router.query.modelo || '',
                              router.query.ordenacao || '',
                              pag.selected + 1
                            );
                          }}
                          containerClassName={"pagination"}
                          activeClassName={styles.paginaAtiva}
                          className={styles.envolvePaginacao}
                          previousClassName={paginacaoAtual == 1 || paginacaoAtual == 0 || anuncios.total == 0 ? styles.previousLabel : ''}                      
                          nextClassName={paginacaoAtual == anuncios.total_paginas ? styles.nextLabel : ''}
                          forcePage={paginacaoAtual > 1 ? paginacaoAtual - 1 : 0}
                      />
                    ) 
                  : null
                }
              </div>
      </div> 
    )
  };