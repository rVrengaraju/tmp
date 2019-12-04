import React, { Component } from 'react';
import './Section2.css'
import Company from '../Company/Company'; 
import Program from '../Program/Program'

class Section2 extends Component {
	state = {

		// rgb(250, 224, 190)
		// rgb(244, 182, 187)
		// rgb(255, 254, 194)
		// rgb(201, 252, 205)
		// rgb(193, 223, 252)
		// rgb(278, 199, 230)

		companyObjArray: [
			{name: "Need", backgroundColor: '#bcd6f0', animation: "unset", link: "http://www.needwestwood.com",text: "Need is a peer-to-peer, hyperlocal, electric-vehicle-driven delivery platform. Their vision is to create a truly peer-to-peer delivery platform that capitalizes on students’ hyperlocal knowledge of university campuses; initially targeting niche markets inaccessible to existing services. By removing unnecessary overhead costs, restructuring the business model, and integrating their open platform, they believe that they can revolutionize the current delivery market."},
			{name: "Charipay", backgroundColor: '#f0768f', animation: "", link: "http://www.charipay.org", text: "Charipay, founded by Kevin Yu, Kyler Gilbert, and Abdullah Elqaq, is an event-centered platform that allows users to donate to causes that are important to them and to the world. Not only does Charipay focus on helping users find causes for them to donate to, they also encourage the education of users about causes and charities around the world. Charipay also ensures that 100% of the user’s donation goes directly to the charity. Charipay’s vision is that everyone can make a difference, anywhere."},
			{name: "YouTrition", backgroundColor: '#f0768f', animation: "", link: "https://youtrition.co", text: "YouTrition is a subscription-based workout supplement company that provides members with monthly shipments of personalized pre-workout, post-workout, and protein powders; access to a personal nutritionist; and inclusion in a fitness-focused community through their social media app. Founders Ben Spievak and Yash Moondhra plan to revolutionize the sports nutrition industry through e-commerce. YouTrition is the first company of its kind, providing an all-encompassing nutrition service as they seek to assist people navigating the confusing sports nutrition and supplement world."},
			{name: "Generosity Designs", backgroundColor: '#f0768f', animation: "", link: "http://generositydesigns.com", text: "Generosity Designs, founded by Richard Yu, is a philanthropic jewelry company that makes custom jewelry pieces. They donate 25% of all sales back to the charity of the customer's choice. Impact and service are are at the core of what they do."},
			{name: "QueueRated", backgroundColor: '#f0768f', animation: "", link: "", text: "QueueRated, founded by Kevin Chen, Will Koe, and Cian Ying, gives every moment its own unique soundtrack. By allowing users to quickly create and join rooms and vote on songs, this interactive jukebox transforms music from background noise into a dynamic and social experience."},
			// {name: "Stealth Startup", backgroundColor: 'rgb(240, 118, 143)', animation: "", text: "Still in ideation"},
			{backgroundColor: '#bcd6f0'}
			// rgb(189, 214, 239)
		],
		index: 5,
		prevIndex: 0,
		companyFlag: 0,
		displayFlag: "program"
	}

	showOtherPageHandler = () => {
		if (this.state.displayFlag === "program"){
			this.setState({
				displayFlag: "companies",
				index: 0
			})
		} else {
			let tempObj = {...this.state.companyObjArray}
			tempObj[this.state.index].animation = ""
			tempObj[0].animation = "unset"
			tempObj[this.state.index].backgroundColor = "rgb(240, 118, 143)"
			tempObj[0].backgroundColor = "#bcd6f0"
			this.setState({
				companyObjArray: tempObj,
				displayFlag: "program",
				index: 5
			});
		}
	}

	changeCompanyHandler = (i) => {

		let tempObj = {...this.state.companyObjArray}
		tempObj[this.state.index].backgroundColor = "rgb(240, 118, 143)";
		tempObj[this.state.index].animation = "";
		tempObj[i].backgroundColor = "#bcd6f0";
		tempObj[i].animation = "unset"
		this.setState({
			index:i,
			companyObjArray: tempObj
		}); 

	}


	render(){
		let display
		if(this.state.displayFlag === "companies"){
			 display = <Company index={this.state.index} company={this.state.companyObjArray} companyClick={this.changeCompanyHandler} showOther={this.showOtherPageHandler}/>
		} else {
			 display = <Program showOther={this.showOtherPageHandler}/>
		}
		//rgb(230, 181, 192)
		let style = {
			backgroundColor: this.state.companyObjArray[this.state.index].backgroundColor
		}

		return(
			<div style={style} className="section2">
				{display}
			</div>
		)
	}
}


export default Section2;





