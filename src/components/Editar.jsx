import React from 'react'
import { useParams } from 'react-router-dom';

 const Editar = () => {
    const {id}=useParams();
    
    return (
    <div>Editar expediente N° {id}</div>
  )
}
export default Editar;