import Link from "next/link";

export default function Teste2({list}){
    return (
      <div style={{paddingTop: 30}}>
        <Link href={"/"}
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
          Ir para pagina home
        </Link>
        <div style={{marginTop: 30}}>{JSON.stringify(list)}</div>
    </div>
    )
}

export async function getServerSideProps() {
    const corpo =  JSON.stringify( {
        acoes: [                        
          { metodo: "destaques", params: [ { resultados: "4" }] },
          { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
        ], id: "1442"
      });
    
    const response =  await fetch(
        "https://dev.infoimoveis.com.br/webservice/hotsites.php",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: corpo
        }
    );
    const list = await response.json()

    return { props: { list } }
}