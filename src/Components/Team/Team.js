import React, { Component } from 'react';
import './Team.css'
import ruban from '../../images/profile/ruban.jpg'
import isha from '../../images/profile/isha.jpg'
import riley from '../../images/profile/riley.jpg'
import paolo from '../../images/profile/paolo.jpg'
import deanna from '../../images/deanna.jpg'
import jennifer from '../../images/jennifer.jpg'
import marion from '../../images/marion.jpg'
import sunny from '../../images/sunny.jpg'

class Team extends Component {
	render(){
		let style = {marginTop: "10vh"}
		let execBoardArray = [
			{name:"RUBAN RENGARAJU", title:"Managing Director", linkedin: "https://www.linkedin.com/in/ruban-rengaraju/", src: ruban}, 
			{name:"ISHA KAMATH", title:"Partnerships & Events", linkedin: "", src: isha},
			{name:"RILEY NOON", title:"Events & Marketing", linkedin: "https://www.linkedin.com/in/riley-noon-7b54b2163/detail/photo/", src: riley}, 
			{name:"PAOLO SHAMOON", title:"Operations & Partnerships", linkedin: "https://www.linkedin.com/in/paolo-shamoon-bb3519171/", src: paolo}
		]
		let advisorArray = [
			{name:"DEANNA EVANS", title:"Startup UCLA Director", src: deanna}, 
			{name:"DR. JENNIFER ​WALSKE", title:"Anderson School Faculty", src: jennifer},
			{name:"MARION PATRICIO", title:"Program Manager", src: marion}, 
			{name:"DR. SUNNY ​SINGH", title:"Angel Investor", src: sunny}
		]
		let execBoard = execBoardArray.map(data => {
			let target
			if (data.linkedin === ""){
				target = ""
			} else {
				target = "_blank"
			}
			return(
				<div className="card">
					<a href={data.linkedin} target={target} rel="noopener noreferrer">
						<img className="photo" src={data.src} alt={data.name}/>
					</a>
					<div className="photoName">{data.name}</div>
					<div className="photoTitle">{data.title}</div>
				</div>
			)
		})

		let advisors = advisorArray.map(data => {
			return(
				<div className="card">
					<img className="photo" src={data.src} alt={data.name}/>
					<div className="photoName">{data.name}</div>
					<div className="photoTitle">{data.title}</div>
				</div>
			)
		})

		return(
				<div className="teamBackground">
					<div style={style} className="teamTitle">Our Team</div>
					<div className="grid">
						{execBoard}
					</div>
					<div className="teamTitle">Our Advisors</div>
					<div className="grid">
						{advisors}
					</div>
				</div>
		)
	}
}

export default Team
