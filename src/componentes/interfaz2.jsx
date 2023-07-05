import React from "react";
import {Link, useNavigate} from 'react-router-dom';

function Interfaz2(props){

	let valorcombobox;
	let valortxtnumber;

	const {agregarOfer}=props;

	let navigate=useNavigate();

	const Tvalorcombo=(e)=>{
		valorcombobox = e.target.value;
	}

	const Tvalortxtnumber=(e)=>{
		valortxtnumber = e.target.value;
	}

	function aniadirOferta(){
		const nuevaOferta={id:6,job: valorcombobox,salary: valortxtnumber};
		agregarOfer(nuevaOferta);
	}

	return(
		<div id="interfazaniadir">
			<div><h1>Add new job offer</h1></div>
			<div><button onClick={()=>navigate('/api/offers')}>Job offers</button></div>
			<div>Job:</div>
			<div>
				<select onChange={Tvalorcombo}>
            		<option value="Frontend developer">Frontend developer</option>
            		<option value="Backend developer">Backend developer</option>
            		<option value="DevOps">DevOps</option>
            		<option value="Fullstack">Fullstack</option>
          	</select>
			</div>
			<div>Salary:</div>
			<div><input type="number" onChange={Tvalortxtnumber}></input></div>
			<div><button onClick={aniadirOferta}>Add Offer</button></div>
		</div>
	);
}

export default Interfaz2;