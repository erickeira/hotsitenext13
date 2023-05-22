import {urlRequisicao,lojaId} from '../../utils';


export const config = {
  runtime: 'edge',
}

export default async  function dados (req,res) {
       
  // const corpo = req.body;
  let body =  await req.text();
    body = JSON.parse(body);

  try {

    const response =  await fetch(
      urlRequisicao,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(body)
      }
    );

    const list = await response.json()    
    // res.status(200).json(list)
    return new Response(JSON.stringify(list));
  } catch (error) {
    return new Response(JSON.stringify({erro:" erro na requisiçao"}));
  }
  
} 

