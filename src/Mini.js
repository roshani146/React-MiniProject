import React from 'react';
import ReactDOM from 'react-dom';
import './Mini.css';
import MiniList from './MiniList';

class Mini extends React.Component{

	constructor(){
		super();
		this.state={
			name:"Welcome To MiniProject"
		}
	}
	nameChnage(){
		this.setState({
			name:"Welcome To RoshaniProject"
		})
	}
	render(){
		const MiniArry=[
			{
				id:1,
				name:"Roshani",
				Work:"WebDevloper"
			},
			{
				id:2,
				name:"smit",
				Work:"Student"
			},
			{
				id:3,
				name:"LILA",
				Work:"HouseWife"
			},
			{
				id:4,
				name:"CHAMAPKLAL",
				Work:"LIC"
			},
		]
		const MiniArryCradList= MiniArry.map((minicard,i)=>{
			return <MiniList  key={i} id={MiniArry[i].id} name={MiniArry[i].name} work={MiniArry[i].Work}/>
		})

	return (
			<div>
				<h1 className="censize">{this.state.name}</h1>
				{MiniArryCradList}
				<button className="btn" onClick = {()=>this.nameChnage()}>Click</button>
			</div>
		)	
	}
}
export default Mini;