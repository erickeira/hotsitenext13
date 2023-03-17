import Link from "next/link";

export default function Teste2({list}){
    return (
      <div style={{paddingTop: 30}}>
        <Link href={"teste3"}
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
          Ir para pagina 3
        </Link>
        <div style={{marginTop: 30}}>POKEMON API</div>
        <div style={{marginTop: 30}}>{JSON.stringify(list)}</div>
    </div>
    )
}

export async function getServerSideProps() {
  const response =  await fetch( "https://pokeapi.co/api/v2/pokemon/ditto");
  const list = await response.json()

  return { props: { list } }
}