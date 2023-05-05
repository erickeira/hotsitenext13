import {urlRequisicao,lojaId} from '../../../utils';
export default async  function dados (req,res) {
       
    res.setHeader('Access-Control-Allow-Origin', '*');

    let query         = JSON.parse(req.body);
    let dadosVeiculos = query.ReqdadosVeiculos; 
    let dadosReq = {}
    let params= {}


    if (query.metodo === "pedidoloja"){
      
      let reqPedido = {
        nome : query.nome || "",
        email: query.email || "",
        telefone: query.telefone || "",
        cidadeuf: query.cidadeuf || "",
        mensagem: query.mensagem || "",
        marca: query.marca || "",
        modelo : query.modelo || "",
        ano: query.ano || "",
        cor: query.cor || ""
      }
      dadosReq = reqPedido
      params ={ "dados": dadosReq }
    }
    if (query.metodo === "contatoloja"){
      
      let reqContato = {
        nome : query.nome || "",
        email: query.email || "",
        telefone: query.telefone || "",
        cidadeuf: query.cidadeuf || "",
        endereco: query.endreco || "",
        mensagem: query.mensagem || "",
      
      }
      dadosReq = reqContato
      params ={  "dados": dadosReq }
    }
    if (query.metodo === "proposta"){

      let idveiculo = dadosVeiculos.idveiculo || "";
      let ReqProposta = {

        marca: dadosVeiculos.marca || "",
        modelo : dadosVeiculos.modelo || "",
        ano: dadosVeiculos.ano || "",
        cor: dadosVeiculos.cor || "",
        preco: dadosVeiculos.preco || "",

        nome : query.nome || "",
        email: query.email || "",
        telefone: query.telefone || "",
        cidadeuf: query.cidadeuf || "",
        mensagem: query.mensagem || "",
      }
      dadosReq = ReqProposta
      
      params ={ "id":idveiculo , "dados": dadosReq }

    }
      

    const corpo = JSON.stringify( {
        acoes: [              
          { "acao" : query.metodo, params }
        ], loja: lojaId
      });

    try {

      const response =  await fetch(
        urlRequisicao,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: corpo
        }
       );

      const list = await response.json()
     
      res.status(200).json(list)
    } catch (error) {
    res.status(400).json( {erro:" erro na requisiçao"} )
  }
  
  } 