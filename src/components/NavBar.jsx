import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <>
                <div  className='bg-secondary mb-0 d-flex justify-content-between divNav'>
                    <h1 className='h1Nav'>Servicios Públicos</h1>

                    <form className="d-flex buscador p-2">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-light" type="submit">Buscar</button>
                    </form>
                </div>
                
                <ul className="nav nav-tabs justify-content-center bg-secondary">

                    <li className="nav-item p-5">
                       <Link to={'/expedientes'}> <button type="button" className="btn fuente" data-bs-toggle="button" >Expedientes</button></Link>
                    </li>

                    <li className="nav-item p-5">
                        <Link to={'/añadir_nuevo'}><button type="button" className="btn fuente" data-bs-toggle="button" autocomplete="off">Añadir Nuevo</button></Link>
                    </li>

                    <li className="nav-item p-5">
                        <button type="button" className="btn fuente" data-bs-toggle="button" autocomplete="off">Estadísticas</button>
                    </li>

                    <li className="nav-item p-5">
                        <button type="button" className="btn fuente" data-bs-toggle="button" autocomplete="off">Agenda</button>
                    </li>

                </ul>
            </>
        );
};
export default NavBar;

