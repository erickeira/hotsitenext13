import { tema } from '../../utils';
import Primary from './primary';


const temas= {
  primary : Primary,
  secundary: ''
}
export default function Menu(props) {
    const Componente = temas[tema.header] 
    return <Componente/>
}