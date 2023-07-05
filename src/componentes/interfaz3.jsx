import React from "react";
import {Link, useNavigate,useParams} from 'react-router-dom';

const Interfaz3=({getOferta})=>{
	
	const { id } = useParams();
	console.log(id);
	let idbusqueda=id.replace(/:/g, "");
    const oferta = getOferta(idbusqueda);

	let navigate=useNavigate();

	if (!oferta) {
		return (<div>
					<div><strong>No se encontró la oferta</strong></div>
					<div><button onClick={()=>navigate('/api/offers')}>Job offers</button></div>
				</div>
				
		);
	}

	return(
		<div id="interfazveroferta">
			<div><h1>Job offer</h1></div>
			<div><button onClick={()=>navigate('/api/offers')}>Job offers</button></div>
			<div>Job:</div>
			<div>{oferta.job}</div>
			<div>Salary:</div>
			<div>{oferta.salary}</div>
		</div>
	);
}

export default Interfaz3;