import Head from "next/head";
import Link from "next/link";

export default function Teste1({list}){
    return (
      <>
        <Head>
          <title>TESTE HOTSITE - {list.destaques.anuncios[0].vei_id}</title>
          <meta name="description" content={`Concessionária TESTE ${list.destaques.anuncios[0].vei_id}`} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="og:image" property="og:image" content={`/alien.png`} />
          <meta name="og:image:width" property="og:image:width" content="300" />
          <meta name="og:image:height" property="og:image:height" content="300" />
        </Head>
        <div style={{paddingTop: 30}}>
            <span></span>
            <Link href={"teste1"}
              style={{
                marginLeft: 10,
                marginTop:30,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft:10,
                paddingRight: 10,
                backgroundColor: 'red',
                borderRadius: 5
              }}
            >
              Ir para pagina 1
            </Link>
            <div style={{marginTop: 30}}>DESTAQUES ANUNCIANTE 1722</div>
            <div style={{marginTop: 30}}>{JSON.stringify(list)}</div>
        </div>
      </>
    )
}

export async function getServerSideProps({ req, res }) {
  try {
    let body = JSON.stringify({
      acoes: 
        [
          {
            acao: "destaques",
            params:{"resultados": 8 }
          }   
        ],
      loja: 1722
    }) 

    const response = await fetch("https://api-dev.shopcar.com.br/hotsites/",{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
    
    let list = await response.json()
    return {    
      props: {list}
    }

  } catch(e) {
    return {
      notFound: true
    }
  } 

  const response =  await fetch( "https://api-dev.shopcar.com.br/hotsites/");
  const list = await response.json()
  if (!list) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { list } }
}