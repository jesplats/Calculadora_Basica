
import { Botones } from './Botones'
import './Calculadora.css'

export const Calculadora = () => {
  return (
 <main>
    <input className='resultado' type='text' value={50}/>
    <input className='display' type='text' value='25+25'/>
<Botones texto='C' clase='gris'/>
<Botones texto='+/-' clase='gris'/>
<Botones texto='%' clase='gris'/>
<Botones texto='/' clase='operacion'/>
<Botones texto='7' clase='numero'/>
<Botones texto='8' clase='numero'/>
<Botones texto='9' clase='numero'/>
<Botones texto='*' clase='operacion'/>
<Botones texto='4' clase='numero'/>
<Botones texto='5' clase='numero'/>
<Botones texto='6' clase='numero'/>
<Botones texto='-' clase='operacion'/>
<Botones texto='1' clase='numero'/>
<Botones texto='2' clase='numero'/>
<Botones texto='3' clase='numero'/>
<Botones texto='+' clase='operacion'/>
<Botones texto='.' clase='numero'/>
<Botones texto='0' clase='numero'/>
<Botones texto='<' clase='numero'/>
<Botones texto='=' clase='operacion'/>

 </main>
  )
}
