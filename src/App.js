import React, { Component } from 'react';
import First from './Components/First/First';
import Section1 from './Components/Section1/Section1';
import Footer from './Components/Footer/Footer';
import Section2 from './Components/Section2/Section2';
import Team from './Components/Team/Team'
import './App.css';

class App extends Component {
  render() {
    return(
    	<div>    		
    		<First/>
    		<Section1/>
    		<Section2/>
        <Team/>
    		<Footer/>
    	</div>
      )
  }
}

export default App;
