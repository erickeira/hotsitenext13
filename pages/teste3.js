import Link from "next/link";

export default function Teste2({list}){
    return (
        <>
            <Link href={"/"}>Ir para home</Link>
            <div>{JSON.stringify(list)}</div>
        </>
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