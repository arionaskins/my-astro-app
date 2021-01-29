import React from 'react';
import GetUserBirthday from './GetInfo/GetUserBirthday.js';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            landingVisibility: false // referring to sun sign visbility
        }
      }

      handleStartBtn = event => {
        this.setState((state, props) => {
           return {  
            landingVisibility: true
           }
          })
      }
    
    

    render() {
      if (!this.state.landingVisibility) {
            return (
                    <div className='content-container' id='landing-container'> 

                        <p>this will show the "about" of sun signs.</p>
                        <p>some text here</p>
                        <p>https://cafeastrology.com/sun.html</p>
                        <p>filler txt also here ha ha</p>
                        <br />
                        <br />
                        <div>
                          <button id='btn' type="button" onClick={this.handleStartBtn}>GET STARTED</button> 
                        </div>
                    </div> )
      } else {
          return ( <GetUserBirthday /> )
      }  ;          
        
  }
}


export default Landing;





  
//   render() {
//     return (
//     <div>
//         <Description />
//         <UserResults />
//     </div> )
// }}