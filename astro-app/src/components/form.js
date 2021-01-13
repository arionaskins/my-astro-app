
  import React from 'react'
  
  export default class MyForm extends React.Component {
      //bind constructors 
    //   this.formHandler = this.formHandler.bind(this); // form event
    //   this.monthHandler = this.monthHandler.bind(this); // [month] input event 
    //   this.dayHandler = this.dayHandler.bind(this); // [day] input event 
    //   this.yearHandler = this.yearHandler.bind(this); // [year] input event 
    // use this inside submit event is undefined

      render() {
        return (
          <form onSubmit={event => this.props.handleSubmit(event)} >
              <h4> Enter your birthday below </h4>

              <div style={{border: "5px"}}>
                <label >Enter month</label>
                <input type='text' 
                onChange={event => this.props.handleMonthChange(event)}
                value={this.props.formData.month} />
  
                <label>Enter day</label>
                <input type='text' 
                onChange={event => this.props.handleDayChange(event)}
                value={this.props.formData.day} />
  
                <label >Enter year</label>
                <input type='text' 
                onChange={event => this.props.handleYearChange(event)}
                value={this.props.formData.year} />
              </div>

              <div>
               <button id='btn' type="submit">GET MY SUN SIGN</button> 
              </div>      
          </form>
      )   };
  } 
