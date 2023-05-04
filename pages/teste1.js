import Link from "next/link";

export default function Teste1({list}){
    return (
        <div style={{paddingTop: 30}}>
            <Link href={"teste2"}
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
              Ir para pagina 2
            </Link>
            <div style={{marginTop: 30}}>ESTOQUE ANUNCIANTE 1722</div>
            <div style={{marginTop: 30}}>{JSON.stringify(list)}</div>
        </div>
    )
}


export async function getServerSideProps({ req, res }) {
  try {
    let body = JSON.stringify({
      acoes: 
        [
          {
            acao: "estoque",
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