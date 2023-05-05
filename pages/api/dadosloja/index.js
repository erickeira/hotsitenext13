import {urlRequisicao,lojaId} from '../../../utils';
export default async  function dados (req,res) {
       
    res.setHeader('Access-Control-Allow-Origin', '*');

   
    // {
    //     "acoes": [{ "acao": "dadosloja" }],
    //     "loja": 1722
    // }
    

    const corpo = JSON.stringify( {
        acoes: [              
            { "acao" : "dadoshotsite"},
            { "acao" : "dadosloja"}
            
        ], loja: 265
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





