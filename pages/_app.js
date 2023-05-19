import '../styles/globals.css'
import AuthProvider from '../context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </AuthProvider>
  )
}

export async function getServerSideProps({ req, res }) {
  try {
    let body = JSON.stringify({
      acoes: [                        
        { metodo: "destaques", params: [ { resultados: "4" }] },
        { metodo: "ultimasnoticias", params: [ { resultados: "4" }] },
        
      ], id: 328
    }) 

    const response = await fetch("https://dev.infoimoveis.com.br/webservice/hotsites.php",{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
    
    let list = await response.json()
    console.log(list)
    return {    
      props: {list}
    }

  } catch(e) {
    return {
      notFound: true
    }
  } 
}