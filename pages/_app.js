import Menu from '../components/menuTopo';
import styles from '../styles/styles.module.scss';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import '../styles/globals.css';

import Rodape from '../components/rodape'
import { tema } from '../utils';



export default function App({ Component, pageProps }) {

  const key = "6Le-0JklAAAAAGkZkeACpvn-22R9kplIB2-LEnHt"

  return(    
      <>
            <GoogleReCaptchaProvider
            reCaptchaKey={key}
            scriptProps={{
              async: false,
              defer: false,
              appendTo: "head",
              nonce: undefined,
            }}
          >
        <Menu/>
        <div className={styles.container}>
          <Component {...pageProps} /> 
          

        </div>
        </GoogleReCaptchaProvider> 
        <Rodape/>  
      </>  
    
  )  
}