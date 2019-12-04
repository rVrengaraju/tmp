import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
	render(){
		return(
			<div>
				 <div className="skyline"></div>
				 <div className="contact-box">
				 	<div className="contact">
				 		<ul>
				 			<li>
				 				Contact Startup Labs
				 			</li>
				 			<li className="icon">
				 				<a href="https://www.facebook.com/startuplabsucla/" target="_blank" rel="noopener noreferrer"> 
				 					<i class="fab fa-facebook"></i>
				 				</a>
				 			</li>
				 			<li className="icon">
				 				<a href="mailto:ucla.bventures@gmail.com" target="_blank" rel="noopener noreferrer" title="ucla.bventures@gmail.com"> 
				 					<i class="fas fa-envelope"></i>
				 				</a>
				 			</li>
				 			<li>
				 				<div>Made with <span className="heart"></span> by <span className="be"> <a href="http://bruinentrepreneurs.org/" target="_blank" rel="noopener noreferrer">Bruin Entrepreneurs </a></span></div>
				 			</li>		
				 		</ul>
				 	</div>

				 </div>
			</div>
		)
	}
}



export default Footer;