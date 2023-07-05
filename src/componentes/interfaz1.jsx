import React from "react";
import {Link, useNavigate} from 'react-router-dom';

function Interfaz1(props){
	
	const{listaofertas}=props;

	let navigate=useNavigate();

	return(
		<div id="interfaz1ubicacion">
			<div id="encabezado1">
				<div>Job Offers</div>
				<div><button onClick={()=>navigate('/api/offer/new')}>Add Offer</button></div>
			</div>
			<div>
				{listaofertas.map((item)=>{return(
					<fieldset>
						<div>{item.job}:</div>
						<div>${item.salary}</div>
						{/* <div><button onClick={()=>navigate('/api/offfer/:id')}>View Offer</button></div> */}
						<div><button><Link to={"/api/offer/:"+item.id}>{item.job}</Link></button></div>
					</fieldset>
					)})
				}
				{/* <fieldset>
					<div>Fronted</div>
					<div>3000</div>
					<div><button>View Offer</button></div>
				</fieldset> */}
			</div>
		</div>
	);
}

export default Interfaz1;