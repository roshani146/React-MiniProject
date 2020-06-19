import React from 'react';
import ReactDOM from 'react-dom';

const MiniList=(props)=>{
	return(
			<div className="mini zoom">
				<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Img"/>
				<h1 className="center">{props.name}</h1>
				<p className="center">{props.work}</p>
			</div>
		)
}
export default MiniList;