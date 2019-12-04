import React, { Component } from 'react';
import './ProfileCard.css';

class ProfileCard extends Component {
	render(){
		return(
			<div>
				<div className="companyCardName">
					{this.props.name}
				</div>
				<div className="companyCardText">
					{this.props.text}
					<div className="companyCardLink">
						<a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link}</a>
					</div>
				</div>
			</div>
		)
	}
}


export default ProfileCard;