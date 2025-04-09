import './Botones.css'
 
export const Botones = ( params) => {
 let {texto,clase}=params;

return <button className={clase} >{texto}</button>
}
