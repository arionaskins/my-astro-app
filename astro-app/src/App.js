import './App.css';
import React from 'react';
import Contents from './components/contents.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    
  }
  render() {
        return (
          <div className='wrapper'>
            <div>
              {/* <h1 className='appTitle'>WHAT'S MY SUN SIGN?</h1> */}
            </div>
             <Contents />
            </div>
        );
    }
  
}

export default App;




// function sayHello() {
//   alert('You clicked me!');
//   console.log(document.getElementById('btn'));
// }

// function sayHell() {
//   alert('You clicked meeeee!', this.value);
//   console.log(document.getElementById('btn'));
// }
// // Usage


// class DOBContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: '1'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }