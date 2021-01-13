import React from 'react';
import UserResults from './user-results.js';

// if visbility: false } render enterFormData , sunsignresultsbox visibility: false ;;;;;; visiblity: !vis
//  if vis: true } render sunsignresultsbox (add start over button -- setState of each bak to ''), enterFormData visibility: false ;;;;;; visiblity: !vis
// 
export default class Contents extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            visibility: false // referring to sun sign visbility
        }
    };


    render() {  
            return (
                    <div>
                        <Description />
                        <UserResults />
                        
                    </div> )
        
  }}

  export const Description = () => {
    return (
      <div>
        <h3>astr0logy is NOT real but here's ur sun syne</h3>
      </div>
    )
  }







  
//   render() {
//     return (
//     <div>
//         <Description />
//         <UserResults />
//     </div> )
// }}