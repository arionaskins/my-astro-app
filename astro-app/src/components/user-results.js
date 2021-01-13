import React from 'react';
import MyForm from './form.js';
import GetMySunSign from './GetMySunSign.js';

export default class UserResults extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            month: "",
            day: "",
            year: '',
            visibility: false // default hidden without DOB
          }
          this.handleMonthChange = this.handleMonthChange.bind(this);
          this.handleDayChange = this.handleDayChange.bind(this);
          this.handleYearChange = this.handleYearChange.bind(this);
          this.handleReset = this.handleReset.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          
    }

        handleSubmit = event => {
          event.preventDefault();
            this.setState({ visibility: true })
        }

          handleMonthChange = event => {
            this.setState({
              month: event.target.value
            })
          }
        
          handleDayChange = event => {
            this.setState({
              day: event.target.value
            })
          }

          handleYearChange = event => {
            this.setState({
              year: event.target.value
            })
          }
          
          handleReset = event => {
            this.setState({
                            month: "",
                            day: "",
                            year: '',
                            visibility: false
                            })
          }
        // button onClick to run handleReset() and re-render form submit 
          

          render() {
            if (!this.state.visibility) {
            return (
              <div>
                <MyForm
                    formData={this.state}
                    handleSubmit={this.handleSubmit}
                    handleMonthChange={this.handleMonthChange}
                    handleDayChange={this.handleDayChange}
                    handleYearChange={this.handleYearChange}
                />
                </div> )
        } else {
            return (<span><br /><br /><br /><br />
            <GetMySunSign month={this.state.month} day={this.state.day} year={this.state.year} />
                <h2>thanx wow congrat u were born on {this.state.month} {this.state.day}, {this.state.year} congrat</h2>
                <button type='button' onClick={this.handleReset}>TRY AGAIN! ((((((:</button>
              
              </span>)
        }
          // <GetMySunSign usr_day={} usr_mo={} usr_yr={} />
          }

}



  
  