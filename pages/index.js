import Link from "next/link";

export default function Teste1({list}){
    return (
        <div style={{paddingTop: 30}}>
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
            <div style={{marginTop: 30}}>POKEMON API</div>
            <div style={{marginTop: 30}}>{JSON.stringify(list)}</div>
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response =  await fetch( "https://pokeapi.co/api/v2/pokemon/ditto");
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