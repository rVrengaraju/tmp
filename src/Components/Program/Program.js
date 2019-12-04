import React, { Component } from 'react';
import './Program.css';
import dinner from '../../images/2020dinner.jpg';
import kickoff from '../../images/kick-off.jpg';


class Program extends Component {
	

	render(){
		return(
			<div>
				<div className="programTitle">Our Program & Companies</div>
				<div className="programFlex">
					<div className="programText1"> 
						<div className="margins1"> 
								Our yearlong program consists of networking events, visits from guest speakers, and informative sessions 
								for business development. Students will be provided with resources to aid them in finance, market analysis,
								and other entrepreneurial topics. The program culminates in a Demo Day in the spring, where students present
								their startups to a network of experienced entrepreneurs and venture capitalists from the LA area. 
						</div>
						{/*<div className="companyButton" onClick={this.props.showOther}>Meet 2018-2019 Cohort →</div>*/}
					</div>


					<div className="image1Container">
						<img src={dinner} alt={"20 20 dinner"} className="programImg1" />
					</div>


				</div>
				<div className="programFlex">


					<div className="image2Container">
						<img src={kickoff} alt={"program kickoff dinner"} className="programImg2" />
					</div>
					<div className="programText2">
						<div className="margins2"> 
							Each team will be paired with an experienced mentor from the LA startup scene. Startup Labs will organize an 
							initial meeting between the mentors and the students. After this, students will be encouraged to connect 
							regularly with their mentors during 'office hours'. The mentors will be available to provide guidance, advice
							and essential skills whilst also being a opportunity for the students to network and further their 
							entrepreneurial careers. 
						</div>
					</div>
				</div>
				<div className="buttonPadding"> 
				</div>
			</div>
		)
	}
}



export default Program;