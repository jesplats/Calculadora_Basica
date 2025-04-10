import './Botones.css'
 
export const Botones = ( params) => {
 let {texto,clase,handleClick}=params;

return <button className={clase} onClick={handleClick} >{texto}</button>
}
