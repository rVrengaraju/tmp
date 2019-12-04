import React, { Component } from 'react';
import './Company.css'
import ProfileCard from '../ProfileCard/ProfileCard'


class Company extends Component {
	render(){
		let style1 = {backgroundColor: this.props.company[0].backgroundColor, animation: this.props.company[0].animation}
		let style2 = {backgroundColor: this.props.company[1].backgroundColor, animation: this.props.company[1].animation}
		let style3 = {backgroundColor: this.props.company[2].backgroundColor, animation: this.props.company[2].animation}
		let style4 = {backgroundColor: this.props.company[3].backgroundColor, animation: this.props.company[3].animation}
		let style5 = {backgroundColor: this.props.company[4].backgroundColor, animation: this.props.company[4].animation}
		// let style6 = {backgroundColor: this.props.company[5].backgroundColor, animation: this.props.company[5].animation}
		return(
			<div className="width">
				<div className="button-row">
					<div className="buttonProgram" onClick={this.props.showOther}> ← Our Program</div>
					<div style={style1} className="button" onClick={() => this.props.companyClick(0)}>Need</div>
					<div style={style2} className="button" onClick={() => this.props.companyClick(1)}>Charipay</div>
					<div style={style3} className="button" onClick={() => this.props.companyClick(2)}>YouTrition</div>
					<div style={style4} className="button" onClick={() => this.props.companyClick(3)}>Generosity Designs</div>
					<div style={style5} className="button" onClick={() => this.props.companyClick(4)}>QueueRated</div>
				</div>
				<ProfileCard name={this.props.company[this.props.index].name} text={this.props.company[this.props.index].text} link={this.props.company[this.props.index].link}/>
			</div>
		)
	}
}

export default Company;