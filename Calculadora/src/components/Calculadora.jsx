import { Botones } from './Botones'
import './Calculadora.css'
import { useState } from 'react'

// Componente principal de la calculadora
export const Calculadora = () => {
  // Estado inicial que contiene la operación actual y el resultado
  let [data, setdata] = useState({ operacion: '', resultado: '' })

  // Función para manejar la escritura de números y operadores
  let escritura = (event) => {
    // Limita la longitud de la operación a 10 caracteres
    if (data.operacion.length >= 10) return
    // Actualiza el estado concatenando el texto del botón presionado
    setdata({ ...data, operacion: `${data.operacion}` + event.target.innerText })
  }

  // Función para borrar toda la operación y el resultado
  const DeleteAll = () => {
    setdata({ operacion: '', resultado: '' })
  }

  // Función para borrar el último carácter de la operación
  let delet = () => {
    setdata({ ...data, operacion: data.operacion.slice(0, data.operacion.length - 1) })
  }

let resultado=()=>{
    const resultado=eval(data.operacion)
    setdata({ ...data, resultado: resultado })
}


  return (
    <main>
      {/* Muestra el resultado de la operación */}
      <span className="resultado">{data.resultado}</span>
      {/* Muestra la operación actual */}
      <span className="display">{data.operacion}</span>

      {/* Botones de la calculadora */}
      <Botones texto='C' clase='gris' handleClick={DeleteAll} />
      <Botones texto='+/-' clase='gris' handleClick={escritura} />
      <Botones texto='%' clase='gris' handleClick={escritura} />
      <Botones texto='/' clase='operacion' handleClick={escritura} />
      <Botones texto='7' clase='numero' handleClick={escritura} />
      <Botones texto='8' clase='numero' handleClick={escritura} />
      <Botones texto='9' clase='numero' handleClick={escritura} />
      <Botones texto='*' clase='operacion' handleClick={escritura} />
      <Botones texto='4' clase='numero' handleClick={escritura} />
      <Botones texto='5' clase='numero' handleClick={escritura} />
      <Botones texto='6' clase='numero' handleClick={escritura} />
      <Botones texto='-' clase='operacion' handleClick={escritura} />
      <Botones texto='1' clase='numero' handleClick={escritura} />
      <Botones texto='2' clase='numero' handleClick={escritura} />
      <Botones texto='3' clase='numero' handleClick={escritura} />
      <Botones texto='+' clase='operacion' handleClick={escritura} />
      <Botones texto='.' clase='numero' handleClick={escritura} />
      <Botones texto='0' clase='numero' handleClick={escritura} />
      <Botones texto='<' clase='numero' handleClick={delet} />
      <Botones texto='=' clase='operacion' handleClick={resultado} />
    </main>
  )
}
