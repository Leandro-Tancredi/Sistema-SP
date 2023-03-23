import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';


const Table = () => {

	const [expedientes, setExpedientes] = useState([]);

	const URL = 'https://gorest.co.in/public/v2/users';

	const showData = async () => {

		try {
			const response = await fetch(URL);
			const data = await response.json();
			setExpedientes(data);
		}

		catch (e) { console.log(e) };
	};

	useEffect(() => {
		showData()
	}, [])

	return (
			<>
				<div className='container-fluid'>
					<table className="table table-bordered table-hover m-1 caption-top">
						<caption>Listado de Expedientes</caption>
						<thead>
							<tr>
								<th></th>
								<th>ID</th>
								<th>NAME</th>
								<th>EMAIL</th>
							</tr>
						</thead>
						<tbody>
							{expedientes.map((exp, index) => {
								return (
									<tr key={index}>
										<td>
											<Link to={`/expedientes/editar/${exp.id}`}><img src="/edit.svg" className="iconEdit" alt='' /></Link>
										</td>
										<td>{exp.id}</td>
										<td>{exp.name}</td>
										<td>{exp.email}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</>
	);
};
export default Table;






